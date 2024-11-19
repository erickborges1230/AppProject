import * as React from 'react';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_500Medium,
} from '@expo-google-fonts/montserrat';
import { RootStack } from './navigation';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
    Montserrat_500Medium: Montserrat_500Medium,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return <RootStack />;
}
