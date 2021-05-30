import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import DummyData from '../../controllers/DummyDataController';
import { ConicalGradient } from '../../components';

const styles = StyleSheet.create({
  conical_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile_picture: { width: 200, aspectRatio: 1, borderRadius: 200 / 2 },
});

export default function Profile() {
  const [profile, setProfile] = useState(null);

  // useEffect(() => {
  //   // Reuse existing data
  //   (async () => {
  //     if (!profile) {
  //       const profileDetails = (await DummyData.getRandomUsers()).results[0];
  //       setProfile(profileDetails);
  //     }
  //   })();
  // }, []);

  // if (profile) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Image source={{ uri: profile.picture.large }} style={styles.profile_picture} /> */}
      <View style={styles.conical_container}>
        <ConicalGradient />
      </View>
    </View>
  );
  // }
  return <View></View>;
}
