import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '../constants';
import {useNavigation} from '@react-navigation/native';
import SuccessModal from '../components/SuccessModal';

const LoginScreen = () => {
  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate('signup');
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <Text style={styles.title}>Log In</Text>
        </View>
        <View style={styles.bottomCotainer}>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Enter your email" />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              secureTextEntry={true}
              placeholder="Enter your password"
            />
          </View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.btnText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.textContainer}
            onPress={navigateToLogin}>
            <Text style={styles.text}>Don't have an account？</Text>
            <Text style={styles.textBold}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grayColor,
  },
  upperContainer: {
    flex: 1.5,
    justifyContent: 'flex-end',
    paddingBottom: 10,
    paddingLeft: 25,
  },
  bottomCotainer: {
    flex: 5.5,
    backgroundColor: Colors.whiteColor,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 35,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: Colors.primaryTextColor,
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
  },
  subTitle: {
    color: Colors.secondaryTextColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    opacity: 0.6,
  },
  inputContainer: {
    height: 50,
    borderWidth: 1,
    width: '100%',
    borderRadius: 12,
    backgroundColor: Colors.whiteColor,
    paddingLeft: 10,
    borderColor: Colors.borderColor,
    marginBottom: 25,
  },
  buttonContainer: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.primaryBgColor,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: Colors.whiteColor,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  textContainer: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: Colors.secondaryTextColor,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  textBold: {
    color: Colors.primaryBgColor,
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
