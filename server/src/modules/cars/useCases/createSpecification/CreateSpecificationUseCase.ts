import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';
interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(
    private createSpecificationRepository: ISpecificationsRepository,
  ) {}
  execute({ description, name }: IRequest): void {
    const checkIfExists = this.createSpecificationRepository.findByName(name);

    if (checkIfExists) {
      throw new Error('Já existe');
    }
    this.createSpecificationRepository.create({ description, name });
  }
}

export { CreateSpecificationUseCase };
