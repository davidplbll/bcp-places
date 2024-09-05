import { IUseCase } from '@contracts';
import { ISignInRepository } from '../../../repository/sign-in.repository';
import { SignInRequest } from '../../../dtos/sign-in/sign-in-request.type';

export class SignInUseCase implements IUseCase<SignInRequest, void> {
  public repository: ISignInRepository;
  constructor(repository: ISignInRepository) {
    this.repository = repository;
  }

  public async execute(data: SignInRequest): Promise<void> {
    return await this.repository.signIn(data);
  }
}
