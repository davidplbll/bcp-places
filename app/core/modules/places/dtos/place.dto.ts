import { InferType, object, string, number, array } from 'yup';

export const PlaceSchema = object({
  latitude: number().required(),
  longitude: number().required(),
  title: string(),
  description: string(),
  images: array(string().required()),
});

export const ListPlaceSchema = array(PlaceSchema);

export type PlaceDto = InferType<typeof PlaceSchema>;
