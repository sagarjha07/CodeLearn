import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {Colors} from '../constants';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Course Learn</Text>
          <Image
            style={styles.avatar}
            source={require('../../assets/images/icons/Avatar.png')}
          />
        </View>
        <View style={styles.searchContainer}>
          <Image
            style={styles.searchIcon}
            source={require('../../assets/images/icons/search-icon.png')}
          />
          <TextInput
            placeholder="Find Course "
            placeholderTextColor={Colors.borderColor}
          />
        </View>
        <View></View>
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: Colors.primaryTextColor,
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
  },
  avatar: {
    height: 50,
    width: 35,
    objectFit: 'contain',
  },
  searchContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.searchContainer,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 20,
  },
  searchIcon: {
    width: 12,
    height: 12,
    marginRight: 15,
    tintColor: Colors.borderColor,
  },
});

export default HomeScreen;
