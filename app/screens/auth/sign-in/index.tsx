import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { SignInFormComponent } from './components';
import { useSignInteractor } from './sign-in.interactor';
import { FormData } from './components/sign-in-form/logic/schema-validation';
import { useCallback } from 'react';
export default function SignInPage() {
  const { signIn, signInErrorHandler, signInLoading } = useSignInteractor();
  const handleSignIn = useCallback((data: FormData) => {
    return signIn({
      username: data.email,
      password: data.password,
    });
  }, []);

  return (
    <ImageBackground
      src="https://i.pinimg.com/originals/a2/ec/3e/a2ec3efaf1cb31d70fdc87829a5b48ec.jpg"
      style={styles.backgroundImage}
      resizeMode="cover" // Ajusta el modo de la imagen
    >
      <View style={styles.overlayContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Bienvenido a BCPlaces</Text>
        </View>
        <View style={styles.container}>
          <SignInFormComponent
            loading={signInLoading}
            submit={handleSignIn}
            error={signInErrorHandler}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    padding: 20,
    paddingBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 12,
    alignItems: 'center',
    zIndex: 1,
    marginTop: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});
