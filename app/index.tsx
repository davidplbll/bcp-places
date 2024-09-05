import { Redirect } from 'expo-router';

export default function RootLayout() {
  return <Redirect href={'/screens/auth/sign-in'} />;
}
