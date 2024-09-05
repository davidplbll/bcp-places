import { PlaceDto } from '../dtos/place.dto';

export interface IPlaceRepository {
  getInterestedPlaces(): Promise<PlaceDto[]>;
}
