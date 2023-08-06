import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../constants';

const CourseItem = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.desc}>
        <Text style={styles.num}>01</Text>
        <View>
          <Text style={styles.title}>Welcome to the Course</Text>
          <Text style={styles.subTitle}>6:10 mins</Text>
        </View>
      </View>
      <Image
        source={require('../../assets/images/icons/play.png')}
        style={styles.img}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  desc: {
    flexDirection: 'row',
  },
  num: {
    color: Colors.secondaryTextColor,
    fontSize: 24,
    fontFamily: 'Poppins-medium',
    opacity: 0.5,
    marginRight: 10,
  },
  img: {
    width: 45,
    height: 45,
    objectFit: 'contain',
  },
  title: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: Colors.primaryTextColor,
  },
  subTitle: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: Colors.primaryBgColor,
  },
});

export default CourseItem;
