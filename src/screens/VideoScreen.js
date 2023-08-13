import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Colors} from '../constants';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import Slider from '@react-native-community/slider';

const VideoScreen = () => {
  const [pause, setPause] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [value, setValue] = useState(0);
  const videoRef = useRef();

  const format = seconds => {
    let mins = parseInt(seconds / 60)
      .toString()
      .padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  useEffect(() => {
    Orientation.lockToLandscape();
  }, []);

  const onProgress = currentProgress => {
    setProgress(currentProgress);
  };

  const onLoad = () => {
    setLoading(false);
  };

  const onLoadStart = () => {
    setLoading(true);
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.container}
        onPress={() => {
          if (clicked === false) {
            setClicked(true);
            setTimeout(() => {
              setClicked(false);
            }, 3000);
          } else setClicked(false);
        }}>
        <Video
          ref={videoRef}
          source={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
          }}
          paused={pause}
          style={styles.video}
          onLoadStart={onLoadStart}
          onProgress={onProgress}
          onLoad={onLoad}
          resizeMode="cover"
        />
        {loading ? (
          <ActivityIndicator
            style={styles.loader}
            size={'large'}
            color={Colors.primaryBgColor}
          />
        ) : clicked ? (
          <View style={styles.controlContainer}>
            <View style={styles.iconContainer}>
              <TouchableOpacity
                onPress={() => {
                  videoRef.current.seek(progress.currentTime - 10);
                }}>
                <Image
                  source={require('../../assets/images/icons/reverse.png')}
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setPause(!pause)}>
                <Image
                  source={
                    pause
                      ? require('../../assets/images/icons/play-icon.png')
                      : require('../../assets/images/icons/pause-icon.png')
                  }
                  style={[styles.icon, {tintColor: null}]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  videoRef.current.seek(progress.currentTime + 10);
                }}>
                <Image
                  source={require('../../assets/images/icons/forward.png')}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.slider}>
              <Text style={{color: 'white'}}>
                {format(progress.currentTime)}
              </Text>
              <Slider
                style={{width: '88%', height: 40}}
                minimumValue={0}
                maximumValue={progress.seekableDuration}
                minimumTrackTintColor={Colors.primaryBgColor}
                maximumTrackTintColor={Colors.whiteColor}
                value={value}
                thumbTintColor={Colors.whiteColor}
                onValueChange={x => {
                  videoRef.current.seek(x);
                  setValue(x);
                }}
              />
              <Text style={{color: 'white'}}>
                {format(progress.seekableDuration)}
              </Text>
            </View>
          </View>
        ) : null}
      </TouchableOpacity>
    </>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryTextColor,
  },
  video: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  icon: {
    width: 50,
    height: 50,
    tintColor: Colors.whiteColor,
    objectFit: 'contain',
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 100,
  },
  slider: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});
