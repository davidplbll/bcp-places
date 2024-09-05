import { SignInRequestDto } from '../dtos/sign-in/sign-in-request.dto';

export interface ISignInRepository {
  signIn(data: SignInRequestDto): Promise<void>;
}
