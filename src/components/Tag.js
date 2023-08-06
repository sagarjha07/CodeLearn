import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../constants';

const Tag = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 20,
    backgroundColor: Colors.tagColor,
    borderRadius: 10,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: Colors.primaryTextColor,
    textAlign: 'center',
  },
});

export default Tag;
