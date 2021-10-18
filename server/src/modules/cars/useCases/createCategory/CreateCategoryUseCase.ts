import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private repository: ICategoriesRepository) {}
  execute({ name, description }: IRequest): void {
    const checkIfExists = this.repository.findByName(name);

    if (checkIfExists) {
      throw new Error('Categoria já existe');
    }

    this.repository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
