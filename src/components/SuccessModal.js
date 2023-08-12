import React, {useState} from 'react';
import {Modal, StyleSheet, Text, Pressable, View, Image} from 'react-native';
import {Colors} from '../constants';
import PrimaryButton from './PrimaryButton';

const SuccessModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <Image
            source={require('../../assets/images/icons/tick.png')}
            style={styles.img}
          />
          <Text style={styles.title}>Success</Text>
          <Text style={styles.desc}>
            Congratulations, you have completed your registration!
          </Text>
          <PrimaryButton title={'Done'} width={'100%'} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(31, 31, 57, 0.6)',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: Colors.whiteColor,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  img: {
    width: 60,
    height: 60,
    objectFit: 'contain',
  },
  title: {
    marginTop: 20,
    color: Colors.primaryTextColor,
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  desc: {
    width: '75%',
    textAlign: 'center',
    color: Colors.secondaryTextColor,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    marginVertical: 10,
  },
});

export default SuccessModal;
