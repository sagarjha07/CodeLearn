import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import SingleCourseScreen from './screens/SingleCourseScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="course-details"
          component={SingleCourseScreen}
          options={navigationOptions}
        />
        <Stack.Screen
          name="onboarding"
          component={OnboardingScreen}
          options={navigationOptions}
        />
        <Stack.Screen
          name="splash"
          component={SplashScreen}
          options={navigationOptions}
        />
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={navigationOptions}
        />
        <Stack.Screen
          name="login"
          component={HomeScreen}
          options={navigationOptions}
        />
        <Stack.Screen
          name="signup"
          component={HomeScreen}
          options={navigationOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const navigationOptions = {
  headerShown: false,
};

export default AppNavigator;
