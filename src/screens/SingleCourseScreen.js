import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import CourseBannerComponent from '../components/CourseBannerComponent';
import {Colors} from '../constants';
import CourseItem from '../components/CourseItem';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import FavouriteButton from '../components/FavouriteButton';

const {width, height} = Dimensions.get('window');

const SingleCourseScreen = () => {
  const t = new Array(20);
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <CourseBannerComponent />
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>React Native v1.0</Text>
            <Text style={styles.subTitle}>6h 14min · 24 Lessons</Text>
          </View>
          <Text style={styles.price}>₹999</Text>
        </View>
        <View style={styles.desc}>
          <Text style={styles.descTitle}>About this Course</Text>
          <Text style={styles.descSubtitle}>
            Sed ut perspiciatis unde omnis iste natus error sit voluem
            accusantium doloremque laudantium bfashfbjavf jhda
          </Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={t}
          renderItem={({item}) => <CourseItem />}
        />
      </View>
      <View style={styles.btnContainer}>
        <FavouriteButton title={'Fav'} />
        <PrimaryButton title={'Buy Now'} width={240} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    flex: 1,
  },
  content: {
    flex: 2,
    backgroundColor: Colors.whiteColor,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -40,
    paddingHorizontal: 20,
    paddingTop: 35,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  title: {
    color: Colors.primaryTextColor,
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
  },
  subTitle: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: Colors.secondaryTextColor,
  },
  price: {
    color: Colors.primaryBgColor,
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
  desc: {
    marginBottom: 20,
  },
  descTitle: {
    color: Colors.primaryTextColor,
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
  descSubtitle: {
    color: Colors.secondaryTextColor,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  btnContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 70,
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: Colors.whiteColor,
    elevation: 20,
    shadowColor: Colors.primaryTextColor,
  },
});

export default SingleCourseScreen;
