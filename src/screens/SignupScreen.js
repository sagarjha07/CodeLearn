import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../constants';
import {useNavigation} from '@react-navigation/native';
import SuccessModal from '../components/SuccessModal';

const SignupScreen = () => {
  const navigation = useNavigation();

  const navigateToSignup = () => {
    navigation.navigate('login');
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.subTitle}>
            Enter your details below & free sign up
          </Text>
        </View>
        <View style={styles.bottomCotainer}>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Enter your email" />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              secureTextEntry={true}
              placeholder="Create your password"
            />
          </View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.btnText}>Create account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.textContainer}
            onPress={navigateToSignup}>
            <Text style={styles.text}>Already have an account？</Text>
            <Text style={styles.textBold}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.successModal}>
        <SuccessModal />
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
  successModal: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default SignupScreen;
