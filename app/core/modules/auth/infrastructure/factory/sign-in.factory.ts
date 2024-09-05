import { SignInProvider } from '../driver-adapter/sign-in.provider';
import { ISignInRepository } from '../../repository/sign-in.repository';
import { SignInProviderMock } from '../driver-adapter-mock/sign-in.provider.mock';
import { TypeProviderEnum } from '@enums/type-provider.enum';

export class SignInFactory {
  static getInstance(
    typeProvider: string = TypeProviderEnum.PROVIDER
  ): ISignInRepository {
    switch (typeProvider) {
      case TypeProviderEnum.PROVIDER:
        return new SignInProvider();
      case TypeProviderEnum.MOCK:
        return new SignInProviderMock();
      default:
        return new SignInProvider();
    }
  }
}
