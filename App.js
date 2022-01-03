import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { OpenSans_400Regular, OpenSans_600SemiBold } from '@expo-google-fonts/open-sans';
import Navigasyon from './Navigasyon';
import Color from './constants/color';
import FlashMessage from "react-native-flash-message";

export default function App() {
  const [dataLoaded] = useFonts({
    'open-sans': OpenSans_400Regular,
    'open-sans-bold': OpenSans_600SemiBold,
  })
  if (!dataLoaded) {
    return < ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      color={Color.primaryColor} size="large" />
  }

  return (
    <>
      <Navigasyon />
      <StatusBar style="auto" />
      <FlashMessage position="bottom" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
