import { signInValidationSchema } from './schema-validation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export const useSignInFormLogic = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInValidationSchema),
  });

  return {
    control,
    handleSubmit,
    errors,
  };
};
