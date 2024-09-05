import { IUseCase } from '@contracts';
import { IPlaceRepository } from '../../../repository/place.repository';
import { Place } from '../../../dtos/place.type';
import { dtoToInterestedPlaceList } from '../../mappers/interested-places/interested-place.deserialize';

export class InterestedPlacesUseCase implements IUseCase<void, Place[]> {
  public repository: IPlaceRepository;
  constructor(repository: IPlaceRepository) {
    this.repository = repository;
  }

  public async execute(): Promise<Place[]> {
    const response = await this.repository.getInterestedPlaces();
    return dtoToInterestedPlaceList(response);
  }
}
