import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, SafeAreaView, ScrollView, FlatList, StatusBar } from 'react-native';
import DummyData from '../../controllers/DummyDataController';
import { ConicalGradient, Carrousel, Text } from '../../components';
import { elements, profile_mock } from './mocks';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';

const profile_size = { width: 200, height: 200, padding: 20 };

const { width, height, padding } = profile_size;

const styles = StyleSheet.create({
  profile_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
    marginBottom: 10,
  },
  profile_item: { marginBottom: 20 },
  profile_picture: { width: width - padding, aspectRatio: 1, borderRadius: width - padding / 2 },
  profile_description: { textAlign: 'center' },
  profile_name: {
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
  { title: '1', text: '1', id: 1 },
  { title: '1', text: '1', id: 1 },
  { title: '1', text: '1', id: 1 },
  { title: '1', text: '1', id: 1 },
  { title: '1', text: '1', id: 1 },
  { title: '1', text: '1', id: 1 },
  { title: '1', text: '1', id: 1 },
  { title: '1', text: '1', id: 1 },
  { title: '1', text: '1', id: 1 },
  { title: '1', text: '1', id: 1 },
  { title: '1', text: '1', id: 1 },
  { title: '1', text: '1', id: 1 },
  { title: '1', text: '1', id: 1 },
  { title: '1', text: '1', id: 1 },
  { title: '1', text: '1', id: 1 },
  { title: '1', text: '1', id: 1 },
  { title: '1', text: '1', id: 1 },
  { title: '1', text: '1', id: 1 },
  { title: '1', text: '1', id: 1 },
  { title: '1', text: '1', id: 1 },
  { title: '1', text: '1', id: 1 },
  { title: '1', text: '1', id: 1 },
  { title: '1', text: '1', id: 1 },
];

// function ItemComponent({ data }) {
//   return (
//     <View style={{ backgroundColor: 'grey', padding: 10, margin: 10, borderRadius: 10 }}>
//       <Text>{data.title}</Text>
//       <Text>{data.text}</Text>
//     </View>
//   );
// }

export default function Profile() {
  useEffect(() => {
    // Pull data from Back End
    (async () => {
      // Cached
      if (!profile) {
        try {
          const profileDetails = (await DummyData.getRandomUsers()).results[0];
          setProfile(profileDetails);
        } catch (e) {
          setProfile(mock);
        }
      }
    })();
  }, []);

  return (
    <>
      <StickyParallaxHeader headerType="DetailsHeader" />
    </>
  );
}

function Header() {
  const [profile, setProfile] = useState(profile_mock);
  const [user, setUserData] = useState({
    quote: 'Seagulls are the eagles of the sea.',
  });

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

        <View style={styles.profile_item}>
          <Text style={styles.profile_description} variant="h1">
            Software Engineer at Facebook {'\n'} "{user.quote}"
          </Text>
        </View>
      </View>
      <View>
        <View style={styles.profile_item}>
          <Text style={styles.profile_name}>
            {profile.name.first} {profile.name.last}
          </Text>
          <Text style={styles.profile_username}>@{profile.login.username}</Text>
        </View>

        <View style={{ ...styles.divider, ...styles.profile_item }} />

        <View style={styles.profile_item}>
          <Carrousel elements={elements} />
        </View>
      </View>
    </>
  );
}
