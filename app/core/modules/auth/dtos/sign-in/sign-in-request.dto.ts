import { InferType, object, string } from 'yup';

export const SignInRequestSchema = object({
  username: string().required(),
  password: string().required(),
});

export type SignInRequestDto = InferType<typeof SignInRequestSchema>;
