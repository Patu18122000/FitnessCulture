import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import UserProfileScreen from './userProfileScreen'; 



import { createNativeStackNavigator } from '@react-navigation/native-stack';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <stack.Navigator>
      <Stack.Screen name="UserProfile" component={UserProfileScreen} />
      </stack.Navigator>
    </NavigationContainer>
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
