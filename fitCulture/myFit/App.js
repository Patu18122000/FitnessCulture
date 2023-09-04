import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from 'react';
import { NavigationContext } from '@react-navigation/native';

import Profile from './screens/Profile'
import Workout from './screens/Workout'
import HomeUser from './screens/HomeUser'
import ProfileUser from './screens/ProfileUser'

import Nutrition from './screens/Nutrition'
import TraineeList from './screens/TraineeList'
import { EditProfile } from './screens';
import BottomTabNav from './navigations/BottomTabNav';
import Home from './src/Home';
import Signup from './src/Signup';
import Login from './src/Login';
import GoalSettingScreen from './src/GoalSettingScreen';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

function App() {
  const [fontsLoaded] = useFonts({
    black: require('./assets/fonts/Inter-Black.ttf'),
    bold: require('./assets/fonts/Inter-Bold.ttf'),
    medium: require('./assets/fonts/Inter-Medium.ttf'),
    regular: require('./assets/fonts/Inter-Regular.ttf'),
    semiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Workout" component={Workout} />
        <Stack.Screen name="Nutrition" component={Nutrition} />

        <Stack.Screen name="TraineeList" component={TraineeList} />
        
        <Stack.Screen name="ProfileUser" component={ProfileUser} />
        <Stack.Screen name="HomeUser" component={HomeUser} />


        <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNav}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
            headerShown: false
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
