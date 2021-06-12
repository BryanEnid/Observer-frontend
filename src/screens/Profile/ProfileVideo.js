import React, { useRef } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

export default function ProfileVideo({ route, children }) {
  const { uri } = route.params;
  const video = useRef(null);

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{ uri }}
        resizeMode="contain"
        isLooping
        onLayout={() => video.current.playAsync()}
        resizeMode={Video.RESIZE_MODE_STRETCH}
        volume={1}

        // useNativeControls
        // onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
}

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
