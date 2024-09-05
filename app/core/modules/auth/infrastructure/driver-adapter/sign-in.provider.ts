import { HttpImplementation } from '@core-libraries/http/http.implementation';
import { SignInRequestDto } from '../../dtos/sign-in/sign-in-request.dto';
import { ISignInRepository } from '../../repository/sign-in.repository';

export class SignInProvider implements ISignInRepository {
  public http = new HttpImplementation();

  public async signIn(request: SignInRequestDto): Promise<void> {
    return this.http.post('', request);
  }
}
