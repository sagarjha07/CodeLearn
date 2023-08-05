import {View, Text, Image} from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <View>
      <Text>SplashScreen</Text>
      <Image source={require('../../assets/images/onboarding1.png')} />
    </View>
  );
};

export default SplashScreen;
