import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {Colors} from '../constants';

const {width, height} = Dimensions.get('window');

const OnboardingPage = props => {
  const {title, subTitle, image} = props.pageData;

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.img} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.whiteColor,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    flex: 4,
    width: width * 0.85,
    objectFit: 'contain',
  },
  textContainer: {
    flex: 2,
    marginTop: -120,
    width: width * 0.6,
  },
  title: {
    color: Colors.primaryTextColor,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
  },
  subTitle: {
    color: Colors.secondaryTextColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default OnboardingPage;
