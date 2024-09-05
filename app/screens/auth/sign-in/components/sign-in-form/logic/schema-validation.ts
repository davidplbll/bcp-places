import * as yup from 'yup';

export const signInValidationSchema = yup.object({
  email: yup
    .string()
    .email('Correo electrónico no válido')
    .required('El correo electrónico es obligatorio'),
  password: yup
    .string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es obligatoria'),
})
export type FormData = {
  password: string;
  email: string;
};
