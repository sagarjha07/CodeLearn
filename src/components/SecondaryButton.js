import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../constants';

const SecondaryButton = ({title}) => {
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
    backgroundColor: Colors.whiteColor,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.primaryBgColor,
    borderWidth: 1,
  },
  text: {
    color: Colors.primaryBgColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
});

export default SecondaryButton;
