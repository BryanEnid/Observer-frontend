import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import DummyData from '../../controllers/DummyDataController';
import { ConicalGradient, Carousel, Text, Divider, Portal } from '../../components';

import { profileMock } from './mocks';
import elements from './CarouselElements';

const profileSize = { width: 180, height: 180, padding: 20 };
const { width, height, padding } = profileSize;

const styles = StyleSheet.create({
  profile_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
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
});

function Header({ profile, user }) {
  return (
    <>
      <View style={styles.profile_container}>
        <SafeAreaView>
          <View style={{ height, ...styles.profile_item }}>
            <ConicalGradient>
              <Image source={{ uri: profile?.picture?.large }} style={styles.profile_picture} />
            </ConicalGradient>
          </View>
        </SafeAreaView>

        <View>
          <Text variant="caption" style={styles.profile_description}>
            {`Software Engineer at Facebook\n"${user.quote}"`}
          </Text>
        </View>
      </View>
    </>
  );
}

function Sticky({ profile }) {
  return (
    <>
      <View style={{ backgroundColor: 'white', justifyContent: 'center' }}>
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
  const [user] = useState({
    quote: 'Seagulls are the eagles of the sea.',
  });

  useEffect(() => {
    (async () => {
      try {
        const profileDetails = (await DummyData.getRandomUsers()).results[0];
        setProfile(profileDetails);
      } catch (e) {
        setProfile(profileMock);
      }
    })();
  }, []);

  return (
    <>
      <ScrollView stickyHeaderIndices={[1]}>
        <Header profile={profile} user={user} />

        <Sticky profile={profile} />

        <View>
          {/* See Carrousel Component for logic
          See CarrouselScreensSetup for registering screens */}
          <Portal name="ProfileCarouselScreens" />
        </View>
      </ScrollView>
    </>
  );
}
