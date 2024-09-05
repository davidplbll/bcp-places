import { SignInRequestDto } from '../../dtos/sign-in/sign-in-request.dto';
import { ISignInRepository } from '../../repository/sign-in.repository';
import { HttpError } from '@helpers/http-error-mock/http-error';
export class SignInProviderMock implements ISignInRepository {
  public async signIn(request: SignInRequestDto): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          request.username === 'testUser@mail.com' &&
          request.password === 'testPassword'
        ) {
          resolve();
        } else {
          reject(new HttpError(401, 'Invalid credentials'));
        }
      }, 2000);
    });
  }
}

