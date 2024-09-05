import { InterestedPlacesUseCase, PlaceFactory, Place } from '@modules/places';
import { useState } from 'react';

export const useInterestedPlaceInteractor = (
  interestedPlacesUseCase = new InterestedPlacesUseCase(
    PlaceFactory.getInstance()
  )
) => {
  const [errorHandler, setErrorHandler] = useState<any>(null);
  const [loadingList, setLoadingList] = useState<boolean>(false);
  const [placeList, setPlaceList] = useState<Place[]>([]);

  const loadPlaces = async (): Promise<void> => {
    setErrorHandler(null);
    try {
      setLoadingList(true);
      setPlaceList([]);
      const data = await interestedPlacesUseCase.execute();
      setPlaceList(data);
    } catch (error: any) {
      setErrorHandler(error.message);
      throw error;
    } finally {
      setLoadingList(false);
    }
  };

  return {
    loadingList,
    loadPlaces,
    errorHandler,
    placeList,
  };
};
