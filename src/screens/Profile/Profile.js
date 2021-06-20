import React, { useEffect, useState, useRef, useCallback } from 'react';
import { View, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { ConicalGradient, Carousel, Text, Divider, Portal } from '../../components';
import { Navigation } from '../../controllers';
import DummyData from '../../controllers/DummyDataController';
import { profileMock } from './mocks';
import elements from './CarouselElements';

// Platform Fixes
const statusBarHeight = getStatusBarHeight();

// Styles
const profileSize = { width: 180, height: 180, padding: 20 };
const { width, height, padding } = profileSize;
const styles = StyleSheet.create({
  profile_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: statusBarHeight,
  },
  profile_item: { marginBottom: 20 },
  profile_picture: {
    width: width - padding,
    aspectRatio: 1,
    borderRadius: width - padding / 2,
  },
  profile_description: { textAlign: 'center' },
  profile_name: {
    paddingTop: 44,
    textAlign: 'center',
  },
  profile_username: { textAlign: 'center' },
  footer: {
    height: 100,
  },
  btn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#fe8a71',
    paddingHorizontal: 10,
    borderRadius: 5,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0.3 * 4, height: 0.5 * 4 },
    shadowOpacity: 0.2,
    shadowRadius: 0.7 * 4,
  },
  btnTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
});

function Header({ profile, user, video: videoURI }) {
  const actionSheetRef = useRef();
  const scrollViewRef = useRef();

  const onClose = useCallback(() => {
    scrollViewRef.current?.setNativeProps({
      scrollEnabled: false,
    });
  }, []);

  const onOpen = useCallback(() => {
    scrollViewRef.current?.setNativeProps({
      scrollEnabled: true,
    });
  }, []);

  const handleProfileVideo = useCallback(() => {
    Navigation.navigate('ProfileVideo', { uri: videoURI });
  }, []);

  const handleProfileOption = useCallback(() => {
    actionSheetRef.current?.show();
  });

  return (
    <>
      <View style={styles.profile_container}>
        <SafeAreaView>
          <TouchableOpacity onPress={handleProfileVideo} onLongPress={handleProfileOption}>
            <View style={{ height, ...styles.profile_item }}>
              <ConicalGradient>
                <Image source={{ uri: profile?.picture?.large }} style={styles.profile_picture} />
              </ConicalGradient>
            </View>
          </TouchableOpacity>
        </SafeAreaView>

        <View>
          <Text variant="caption" style={styles.profile_description}>
            {`Software Engineer at Facebook\n"${user.quote}"`}
          </Text>
        </View>
      </View>

      <ActionSheet
        initialOffsetFromBottom={0.6}
        ref={actionSheetRef}
        onOpen={onOpen}
        statusBarTranslucent
        onClose={onClose}
        defaultOverlayOpacity={0.3}
      >
        <View style={{ paddingHorizontal: 12 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text variant="h2">option 1</Text>
            <Text variant="h2">option 2</Text>
            <Text variant="h2">option 3</Text>
          </View>

          <View style={styles.footer} />
        </View>
      </ActionSheet>
    </>
  );
}

function Sticky({ profile }) {
  return (
    <>
      <View style={{ justifyContent: 'center', backgroundColor: 'white' }}>
        <View style={styles.profile_item}>
          <Text variant="h2" style={styles.profile_name}>
            {profile.name.first} {profile.name.last}
          </Text>
          <Text variant="caption" style={styles.profile_username}>
            @{profile.login.username}
          </Text>
        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Divider style={styles.profile_item} />
        </View>

        <View style={styles.profile_item}>
          <Carousel elements={elements} gateNameRender="ProfileCarouselScreens" />
        </View>
      </View>
    </>
  );
}

export default function Profile() {
  const [profile, setProfile] = useState(profileMock);
  const [video, setVideo] = useState({});
  const [user] = useState({
    quote: 'Seagulls are the eagles of the sea.',
  });

  useEffect(() => {
    (async () => {
      try {
        const profileDetails = (await DummyData.getRandomUsers()).results[0];
        const randomNumber = Math.round(Math.random() * 79);
        const profileVideo = (await DummyData.getRandomVideos()).videos[randomNumber].video_files[0]
          .link;
        setVideo(profileVideo);
        setProfile(profileDetails);
      } catch (e) {
        // console.log(e.message);
        // console.log(e);
        setProfile(profileMock);
      }
    })();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView stickyHeaderIndices={[1]}>
        <Header profile={profile} user={user} video={video} />

        <Sticky profile={profile} />

        <View>
          {/* See Carrousel Component for logic
          See CarrouselScreensSetup for registering screens */}
          <Portal name="ProfileCarouselScreens" />
        </View>
      </ScrollView>
    </View>
  );
}
