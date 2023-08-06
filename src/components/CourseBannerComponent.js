import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';
import {Colors} from '../constants';
import Tag from './Tag';

const {width, height} = Dimensions.get('window');

const CourseBannerComponent = () => {
  return (
    <View style={styles.container}>
      <View>
        <Tag title={'BESTSELLER'} />
        <Text style={styles.text}>React Native v1.0</Text>
      </View>
      <View>
        <Image
          source={require('../../assets/images/onboarding1.png')}
          style={styles.img}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.bannerColor,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    marginTop: 10,
    color: Colors.primaryTextColor,
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
  img: {
    width: width * 0.4,
    height: 225,
    objectFit: 'contain',
  },
});

export default CourseBannerComponent;
