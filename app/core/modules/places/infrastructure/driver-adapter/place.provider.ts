import { HttpImplementation } from '@core-libraries/http/http.implementation';
import { PlaceDto } from '../../dtos/place.dto';
import { IPlaceRepository } from '../../repository/place.repository';

export class PlaceProvider implements IPlaceRepository {
  public http = new HttpImplementation();

  public async getInterestedPlaces(): Promise<PlaceDto[]> {
    return this.http.get('http://demo5965342.mockable.io/interested-places');
  }
}
