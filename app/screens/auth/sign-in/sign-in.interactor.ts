import { TypeProviderEnum } from '@/app/core/enums';
import { SignInFactory, SignInRequest, SignInUseCase } from '@modules/auth';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export const useSignInteractor = (
  signInUseCase = new SignInUseCase(
    SignInFactory.getInstance(TypeProviderEnum.MOCK)
  )
) => {
  const router = useRouter();
  const [signInErrorHandler, setSignInErrorHandler] = useState<any>(null);
  const [signInLoading, setSignInLoading] = useState<boolean>(false);
  const signIn = async (data: SignInRequest): Promise<void> => {
    setSignInErrorHandler(null);
    try {
      setSignInLoading(true);
      await signInUseCase.execute(data);
      router.push('/screens/places/interested-places');
    } catch (error: any) {
      setSignInErrorHandler(error.message);
    } finally {
      setSignInLoading(false);
    }
  };

  return {
    signInLoading,
    signIn,
    signInErrorHandler,
  };
};
