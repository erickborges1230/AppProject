/*eslint-disable prettier/prettier;*/
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './drawer-navigator';
import Modal from '../src/screens/modal';
import FirstRegisterScreen from '~/page/screenregister/firstscreen';
import Welcome from '~/page/welcome';
import SecondRegisterScreen from '~/page/screenregister/secondscreen';
import SingnIn from '~/page/singnIn';

export type RootStackParamList = {
  FirstRegisterScreen: undefined;
  SecondRegisterScreen: undefined;
  DrawerNavigator: undefined;
  Modal: undefined;
  TabNavigator: undefined;
  Welcome: undefined;
  SingnIn: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen
          name="Modal"
          component={Modal}
          options={{ presentation: 'modal', headerLeft: () => null }}
        />
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SingnIn" component={SingnIn} options={{ headerShown: false }} />
        <Stack.Screen
          name="FirstRegisterScreen"
          component={FirstRegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SecondRegisterScreen"
          component={SecondRegisterScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { RootStack };
