import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, SafeAreaView, ScrollView, FlatList, StatusBar } from 'react-native';
import DummyData from '../../controllers/DummyDataController';
import { ConicalGradient, Carrousel, Text } from '../../components';
import { elements, profile_mock } from './mocks';

const profile_size = { width: 200, height: 200, padding: 20 };

const { width, height, padding } = profile_size;

const styles = StyleSheet.create({
  profile_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
  },
  profile_item: { marginBottom: 20 },
  profile_picture: { width: width - padding, aspectRatio: 1, borderRadius: width - padding / 2 },
  profile_description: { textAlign: 'center' },
  profile_name: {
    paddingTop: 44,
    textAlign: 'center',
    fontSize: 19,
    fontWeight: '700',
  },
  profile_username: { textAlign: 'center' },
  divider: {
    width: '30%',
    borderWidth: 1,
    borderRadius: 1,
  },
});

const DATA = [
  { title: '1', text: '1', id: 1 },
  { title: '1', text: '1', id: 2 },
  { title: '1', text: '1', id: 3 },
  { title: '1', text: '1', id: 4 },
  { title: '1', text: '1', id: 5 },
  { title: '1', text: '1', id: 6 },
  { title: '1', text: '1', id: 7 },
  { title: '1', text: '1', id: 8 },
  { title: '1', text: '1', id: 9 },
  { title: '1', text: '1', id: 10 },
  { title: '1', text: '1', id: 11 },
  { title: '1', text: '1', id: 12 },
  { title: '1', text: '1', id: 13 },
  { title: '1', text: '1', id: 14 },
  { title: '1', text: '1', id: 15 },
  { title: '1', text: '1', id: 16 },
  { title: '1', text: '1', id: 17 },
  { title: '1', text: '1', id: 18 },
  { title: '1', text: '1', id: 19 },
  { title: '1', text: '1', id: 20 },
  { title: '1', text: '1', id: 21 },
  { title: '1', text: '1', id: 22 },
  { title: '1', text: '1', id: 23 },
  { title: '1', text: '1', id: 24 },
];

function ItemComponent({ item }) {
  return (
    <View style={{ backgroundColor: 'grey', padding: 10, margin: 10, borderRadius: 10 }}>
      <Text>{item.title}</Text>
      <Text>{item.text}</Text>
    </View>
  );
}

export default function Profile() {
  const [profile, setProfile] = useState(profile_mock);
  const [user, setUserData] = useState({
    quote: 'Seagulls are the eagles of the sea.',
  });

  useEffect(() => {
    // Pull data from Back End
    (async () => {
      // Cached
      // if (!profile) {
      try {
        const profileDetails = (await DummyData.getRandomUsers()).results[0];
        setProfile(profileDetails);
      } catch (e) {
        setProfile(mock);
      }
      // }
    })();
  }, []);

  return (
    <>
      <ScrollView stickyHeaderIndices={[1]}>
        <Header profile={profile} user={user} />

        {/* <CarrouselHeader profile={profile} onChange={handle}/> */}

        <View>
          <FlatList data={DATA} renderItem={ItemComponent} />
        </View>
      </ScrollView>
    </>
  );
}

function Header({ profile, user }) {
  return (
    <>
      <View style={styles.profile_container}>
        <SafeAreaView>
          <View style={{ height: height, ...styles.profile_item }}>
            <ConicalGradient>
              <Image source={{ uri: profile?.picture?.large }} style={styles.profile_picture} />
            </ConicalGradient>
          </View>
        </SafeAreaView>

        <View>
          <Text style={styles.profile_description} variant="h1">
            Software Engineer at Facebook {'\n'} "{user.quote}"
          </Text>
        </View>
      </View>
    </>
  );
}

function CarrouselHeader({ profile }) {
  return (
    <>
      <View style={{ backgroundColor: 'white', justifyContent: 'center' }}>
        <View style={styles.profile_item}>
          <Text style={styles.profile_name}>
            {profile.name.first} {profile.name.last}
          </Text>
          <Text style={styles.profile_username}>@{profile.login.username}</Text>
        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ ...styles.divider, ...styles.profile_item }} />
        </View>

        <View style={styles.profile_item}>
          <Carrousel elements={elements} />
        </View>
      </View>
    </>
  );
}
