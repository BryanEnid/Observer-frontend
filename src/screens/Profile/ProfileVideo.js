import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  video: { flex: 1 },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function ProfileVideo({ route }) {
  const { uri } = route.params;
  const video = useRef(null);

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{ uri }}
        resizeMode={Video.RESIZE_MODE_COVER}
        isLooping
        onLayout={() => video.current.playAsync()}
        volume={100}
        useNativeControls
        // onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
}
