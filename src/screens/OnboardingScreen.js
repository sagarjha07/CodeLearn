import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {Colors, onboardingData} from '../constants';
import OnboardingPage from '../components/OnboardingPage';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

const {width, height} = Dimensions.get('window');

const OnboardingScreen = () => {
  const data = onboardingData;
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <FlatList
        data={data}
        horizontal={true}
        pagingEnabled={true}
        bounces={false}
        decelerationRate={'fast'}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return <OnboardingPage pageData={item} />;
        }}
        keyExtractor={item => item.id}
        onScroll={e => {
          const index = e.nativeEvent.contentOffset.x / width;
          setCurrentIndex(Math.ceil(index));
        }}
      />
      <View style={styles.dotList}>
        {data.map((item, index) => (
          <View
            style={[
              styles.dotContainer,
              {
                backgroundColor:
                  currentIndex === index
                    ? Colors.primaryBgColor
                    : Colors.secondaryTextColor,
                opacity: currentIndex === index ? 1 : 0.3,
                width: currentIndex === index ? 40 : 15,
                height: currentIndex === index ? 6 : 5,
              },
            ]}
          />
        ))}
      </View>
      {currentIndex === data.length - 1 ? (
        <View style={styles.buttonContainer}>
          <PrimaryButton title={'Login'} />
          <SecondaryButton title={'Singup'} />
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  dotContainer: {
    height: 5,
    width: 15,
    borderRadius: 10,
  },
  dotList: {
    position: 'absolute',
    bottom: 135,
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 20,
  },
});

export default OnboardingScreen;
