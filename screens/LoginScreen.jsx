import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Dimensions, ImageBackground, Platform, Pressable, StyleSheet, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text, View } from '../components/Themed';
import { useAuth, useIsSigninIn } from '../hooks/useAuth';

const {
  width,
  height
} = Dimensions.get("window")
export default function LoginScreen({ navigation }) {
  const {
    signInUser,
    isSigninInProgress,
    userInfo
  } = useAuth();

  useEffect(() => {
    if (!!userInfo) navigation.navigate("Root")
  }, [userInfo]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/images/login_background.jpg')}
        resizeMode="cover"
        style={[styles.background]}
      />
      <View
        style={[styles.background, { backgroundColor: "#00000080" }]}
      />
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "transparent",
      }}>
        <ImageBackground
          source={require('../assets/images/big_icon.png')}
          resizeMode="cover"
          style={[styles.icon, { flex: 1, }]}
        />

        <GoogleSigninButton
          style={{ width: 250, height: 70 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signInUser}
          disabled={isSigninInProgress}

        />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    width,
    height,
    position: "absolute",
  },
  icon: {
    width: 204,
    height: 188,
    position: "absolute",
    top: 100,
  },
  buttonContainer: {
    backgroundColor: "transparent",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonView: {
    backgroundColor: "#fff",
    borderRadius: 30,
    minWidth: 200,
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
