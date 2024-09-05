import { PlaceDto } from '../../dtos/place.dto';
import { IPlaceRepository } from '../../repository/place.repository';
export class PlaceProviderMock implements IPlaceRepository {
  public async getInterestedPlaces(): Promise<PlaceDto[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            latitude: 40.416775,
            longitude: -3.70379,
            title: 'Restaurante Sobrino de Botín',
            description:
              'El restaurante más antiguo del mundo según el Guinness World Records, famoso por su cochinillo asado.',
            images: ['https://example.com/images/sobrino_botin_1.jpg'],
          },
        ]);
      }, 2000);
    });
  }
}
