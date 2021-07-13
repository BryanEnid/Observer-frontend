import React, { useEffect, useState, useRef, useContext } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Animated,
  Dimensions,
  Easing,
  SafeAreaView,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { Text, Divider, PortalContext } from '../../components';
import DummyData from '../../controllers/DummyDataController';
import { profileMock } from './mocks';
import elements from './CarouselElements';
import Header from './Header';

const { width, height } = Dimensions.get('window');

// Styles
const subScreenSize = { width };
const carrouselItemSize = { width: 100 };

// const { width, height, padding } = profileSize;
const styles = StyleSheet.create({
  profile_name: {
    marginTop: 15,
    textAlign: 'center',
  },
  profile_username: { textAlign: 'center' },
  screens: {
    width: subScreenSize.width,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  carrousel: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginLeft: width / 2 - carrouselItemSize.width / 2,
  },
  profile_item: { marginBottom: 10 },
  carrousel_item: {
    width: carrouselItemSize.width,
    textAlign: 'center',
    paddingVertical: 5,
  },
});

export default function Profile() {
  const { teleport, clean } = useContext(PortalContext);
  const [profile, setProfile] = useState(profileMock);
  const [video, setVideo] = useState({});
  const subScreens = useRef(null);

  const activeIndex = useRef(new Animated.Value(0)).current;
  const activeIndexAnimation = useRef(new Animated.Value(0)).current;
  const [user] = useState({
    quote: 'Seagulls are the eagles of the sea.',
  });

  const size = carrouselItemSize.width;
  const translateX = activeIndexAnimation.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [size, 0, -size],
  });

  useEffect(() => {
    Animated.parallel([
      Animated.timing(activeIndexAnimation, {
        toValue: activeIndex,
        duration: 500,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
    ]).start();
  });

  useEffect(() => {
    const BottomMenu = elements[0].bottomMenu;
    teleport('BottomMenu', <BottomMenu />);
    (async () => {
      try {
        const profileDetails = (await DummyData.getRandomUsers()).results[0];
        const randomNumber = Math.round(Math.random() * 79);
        const profileVideo = (await DummyData.getRandomVideos()).videos[randomNumber].video_files[0]
          .link;
        setVideo(profileVideo);
        setProfile(profileDetails);
      } catch (e) {
        setProfile(profileMock);
      }
    })();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView stickyHeaderIndices={[1]} contentInsetAdjustmentBehavior="automatic">
        <Header profile={profile} user={user} video={video} />

        <View style={{ justifyContent: 'center', backgroundColor: 'white' }}>
          <View style={styles.profile_item}>
            <Text variant="h2" style={styles.profile_name}>
              {profile.name.first} {profile.name.last}
            </Text>
            <Text variant="button" style={styles.profile_username}>
              @{profile.login.username}
            </Text>
          </View>

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Divider style={styles.profile_item} />
          </View>

          <Animated.View style={[styles.carrousel, { transform: [{ translateX }] }]}>
            {elements.map((item, index) => (
              <TouchableOpacity
                key={item.title.trim().toLowerCase()}
                onPress={() => {
                  activeIndex.setValue(index);
                  subScreens.current.scrollToIndex({ index, animated: true });
                }}
              >
                <Text style={styles.carrousel_item}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </Animated.View>
        </View>

        <FlatList
          // contentContainerStyle={{ height: 300 }}
          // contentInsetAdjustmentBehavior="automatic"
          data={elements}
          onMomentumScrollEnd={(ev) => {
            const newIndex = Math.floor(ev.nativeEvent.contentOffset.x / subScreenSize.width);
            console.log('height', ev.nativeEvent);
            // TODO: It should not vibrate when prevIndex is same as activeIndex
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
            activeIndex.setValue(newIndex);
            const BottomMenu = elements[newIndex]?.bottomMenu;
            if (BottomMenu) teleport('BottomMenu', <BottomMenu />);
            if (!BottomMenu) clean('BottomMenu');
          }}
          ref={subScreens}
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
          initialScrollIndex={0}
          getItemLayout={(_, index) => ({
            length: subScreenSize.width,
            offset: subScreenSize.width * index,
            index,
          })}
          keyExtractor={(item) => item.title.trim().toLowerCase()}
          renderItem={({ item: { component: Component } }) => (
            <View style={styles.screens}>
              <Component />
            </View>
          )}
        />
        <SafeAreaView />
      </ScrollView>
    </View>
  );
}
