import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../constants';

const PrimaryButton = ({title}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 160,
    backgroundColor: Colors.primaryBgColor,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.whiteColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
});

export default PrimaryButton;
