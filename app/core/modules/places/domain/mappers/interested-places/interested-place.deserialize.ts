import { PlaceDto, ListPlaceSchema } from '../../../dtos/place.dto';
import { Place } from '../../../dtos/place.type';

export const dtoToInterestedPlace = (dto: PlaceDto): Place => ({
  description: dto.description ?? '',
  images: dto.images ?? [],
  title: dto.title ?? '',
  latitude: dto.latitude,
  longitude: dto.longitude,
});

export const dtoToInterestedPlaceList = (dto: PlaceDto[]): Place[] => {
  try {
    ListPlaceSchema.validateSync(dto);
    return dto.map((value) => dtoToInterestedPlace(value));
  } catch (_) {
    return [];
  }
};
