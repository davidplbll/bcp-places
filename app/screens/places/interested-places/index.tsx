import { DeviceEventEmitter, View } from 'react-native';
import BcpMapViewer from '../../../../components/BcpMapViewer';
import { useInterestedPlaceInteractor } from './interested-places.interactor';
import { useEffect, useState } from 'react';
import { ImageCarousel } from '@/components/ImageCarousel';
import { Place } from '@modules/places';
export default function InterestedPlacePage() {
  const { placeList, loadPlaces } = useInterestedPlaceInteractor();
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  useEffect(() => {
    const eventListener = DeviceEventEmitter.addListener(
      'onMarkerSelect',
      (event) => {
        const { title } = event;
        setSelectedPlace(
          placeList.find((place) => place.title === title) ?? null
        );
      }
    );
    return () => {
      eventListener.remove();
    };
  }, [placeList]);

  useEffect(() => {
    loadPlaces().then();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <BcpMapViewer style={{ flex: 1 }} markers={placeList} />
      {selectedPlace && (
        <ImageCarousel
          images={selectedPlace.images}
          title={selectedPlace.title}
        />
      )}
    </View>
  );
}
