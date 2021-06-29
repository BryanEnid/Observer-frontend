import React, { useRef, useCallback, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Text, ConicalGradient } from '../../components';
import Navigation from '../../controllers/NavigationController';

const statusBarHeight = getStatusBarHeight();
const isAndroid = Platform.OS === 'android';

// Styles
const profileSize = { width: 180, height: 180, padding: 20 };

const styles = StyleSheet.create({
  profile_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: isAndroid ? statusBarHeight : null,
  },
  profile_item: { marginBottom: 20 },
  profile_picture: {
    width: profileSize.width - profileSize.padding,
    aspectRatio: 1,
    borderRadius: profileSize.width - profileSize.padding / 2,
  },
  profile_description: { textAlign: 'center' },
  footer: {
    height: 100,
  },
});

export default function Header({ profile, user, video: videoURI }) {
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
  }, [videoURI]);

  const handleProfileOption = useCallback(() => {
    actionSheetRef.current?.show();
  });

  return (
    <>
      <View style={styles.profile_container}>
        <TouchableOpacity onPress={handleProfileVideo} onLongPress={handleProfileOption}>
          <View style={[{ height: profileSize.height }, styles.profile_item]}>
            <ConicalGradient>
              <Image source={{ uri: profile?.picture?.large }} style={styles.profile_picture} />
            </ConicalGradient>
          </View>
        </TouchableOpacity>

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
        bounceOnOpen
        bounciness={4}
        gestureEnabled
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
