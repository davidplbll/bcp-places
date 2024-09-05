import { PlaceProvider } from '../driver-adapter/place.provider';
import { IPlaceRepository } from '../../repository/place.repository';
import { PlaceProviderMock } from '../driver-adapter-mock/place.provider.mock';
import { TypeProviderEnum } from '@enums/type-provider.enum';

export class PlaceFactory {
  static getInstance(
    typeProvider: string = TypeProviderEnum.PROVIDER
  ): IPlaceRepository {
    switch (typeProvider) {
      case TypeProviderEnum.PROVIDER:
        return new PlaceProvider();
      case TypeProviderEnum.MOCK:
        return new PlaceProviderMock();
      default:
        return new PlaceProvider();
    }
  }
}
