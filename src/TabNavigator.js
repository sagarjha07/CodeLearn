import * as React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import {Colors} from './constants';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors.whiteColor,
          elevation: 10,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          position: 'absolute',
          bottom: 0,
          borderColor: 'transparent',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused
                    ? Colors.primaryBgColor
                    : Colors.secondaryTextColor,
                }}
                source={require('../assets/images/icons/courses.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused, color}) => {
            return (
              <View
                style={{
                  backgroundColor: Colors.grayColor,
                  padding: 20,
                  borderRadius: 35,
                  elevation: 5,
                }}>
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused
                      ? Colors.primaryBgColor
                      : Colors.secondaryTextColor,
                    objectFit: 'contain',
                  }}
                  source={require('../assets/images/icons/search-icon.png')}
                />
              </View>
            );
          },
          tabBarItemStyle: {
            marginTop: -60,
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused
                    ? Colors.primaryBgColor
                    : Colors.secondaryTextColor,
                }}
                source={require('../assets/images/icons/user-icon.png')}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
