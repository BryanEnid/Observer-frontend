import React, { useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

export default function ProfileVideo({ route }) {
  const { uri } = route.params;
  const video = React.useRef(null);
  // const [status, setStatus] = React.useState({});

  // useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{ uri }}
        // useNativeControls
        resizeMode="contain"
        isLooping
        onLayout={() => video.current.playAsync()}
        resizeMode={Video.RESIZE_MODE_STRETCH}
        volume={1}
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
