// import React, { useEffect, useState, createRef, useCallback } from 'react';
// import { View, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
// import { ConicalGradient, Carousel, Text, Divider, Portal } from '../../components';
// import DummyData from '../../controllers/DummyDataController';
// import { profileMock } from './mocks';
// import elements from './CarouselElements';

// // Platform Fixes
// import { getStatusBarHeight } from 'react-native-status-bar-height';
// const statusBarHeight = getStatusBarHeight();

// // Refs
// const actionSheetRef = createRef();

// // Styles
// const profileSize = { width: 180, height: 180, padding: 20 };
// const { width, height, padding } = profileSize;
// const styles = StyleSheet.create({
//   profile_container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: statusBarHeight,
//   },
//   profile_item: { marginBottom: 20 },
//   profile_picture: {
//     width: width - padding,
//     aspectRatio: 1,
//     borderRadius: width - padding / 2,
//   },
//   profile_description: { textAlign: 'center' },
//   profile_name: {
//     paddingTop: 44,
//     textAlign: 'center',
//   },
//   profile_username: { textAlign: 'center' },
// });

// function Header({ profile, user }) {
//   const [show, setShow] = useState(false);

//   const handleProfileVideo = useCallback(() => {}, []);

//   const handleProfileOption = useCallback(() => {
//     setShow(true);
//   });

//   return (
//     <>
//       <View style={styles.profile_container}>
//         <SafeAreaView>
//           <TouchableOpacity onPress={handleProfileVideo} onLongPress={handleProfileOption}>
//             <View style={{ height, ...styles.profile_item }}>
//               <ConicalGradient>
//                 <Image source={{ uri: profile?.picture?.large }} style={styles.profile_picture} />
//               </ConicalGradient>
//             </View>
//           </TouchableOpacity>
//         </SafeAreaView>

//         <View>
//           <Text variant="caption" style={styles.profile_description}>
//             {`Software Engineer at Facebook\n"${user.quote}"`}
//           </Text>
//         </View>
//       </View>

//       <ActionSheetModal
//         visible={show}
//         onHandleCancel={() => {}}
//         onHandleSave={() => {}}
//         data={{}}
//       />
//     </>
//   );
// }

// function Sticky({ profile }) {
//   return (
//     <>
//       <View style={{ backgroundColor: 'white', justifyContent: 'center' }}>
//         <View style={styles.profile_item}>
//           <Text variant="h2" style={styles.profile_name}>
//             {profile.name.first} {profile.name.last}
//           </Text>
//           <Text variant="caption" style={styles.profile_username}>
//             @{profile.login.username}
//           </Text>
//         </View>

//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <Divider style={styles.profile_item} />
//         </View>

//         <View style={styles.profile_item}>
//           <Carousel elements={elements} gateNameRender="ProfileCarouselScreens" />
//         </View>
//       </View>
//     </>
//   );
// }

// export default function Profile() {
//   const [profile, setProfile] = useState(profileMock);
//   const [user] = useState({
//     quote: 'Seagulls are the eagles of the sea.',
//   });

//   useEffect(() => {
//     (async () => {
//       try {
//         const profileDetails = (await DummyData.getRandomUsers()).results[0];
//         setProfile(profileDetails);
//       } catch (e) {
//         setProfile(profileMock);
//       }
//     })();
//   }, []);

//   return (
//     <>
//       <ScrollView stickyHeaderIndices={[1]}>
//         <Header profile={profile} user={user} />

//         <Sticky profile={profile} />

//         <View>
//           {/* See Carrousel Component for logic
//           See CarrouselScreensSetup for registering screens */}
//           <Portal name="ProfileCarouselScreens" />
//         </View>
//       </ScrollView>
//     </>
//   );
// }

import React, { useEffect, useRef } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';

const App = () => {
  const actionSheetRef = useRef();
  const scrollViewRef = useRef();
  const actionSheetScrollRef = actionSheetRef.current?.scrollViewRef;

  const onClose = () => {
    scrollViewRef.current?.setNativeProps({
      scrollEnabled: false,
    });
  };

  const onOpen = () => {
    scrollViewRef.current?.setNativeProps({
      scrollEnabled: true,
    });
  };

  return (
    <>
      <SafeAreaView style={styles.safeareview}>
        <TouchableOpacity
          onPress={() => {
            actionSheetRef.current?.show();
          }}
          style={styles.btn}
        >
          <Text style={styles.btnTitle}>Open ActionSheet</Text>
        </TouchableOpacity>

        <ActionSheet
          initialOffsetFromBottom={0.6}
          ref={actionSheetRef}
          onOpen={onOpen}
          statusBarTranslucent
          bounceOnOpen={true}
          bounciness={4}
          gestureEnabled={true}
          onClose={onClose}
          defaultOverlayOpacity={0.3}
        >
          <View
            style={{
              paddingHorizontal: 12,
            }}
          >
            {/*  Add a Small Footer at Bottom */}
            <View style={styles.footer} />
          </View>
        </ActionSheet>
      </SafeAreaView>
    </>
  );
};

export default App;

const items = [100, 60, 150, 200];

const styles = StyleSheet.create({
  footer: {
    height: 100,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnLeft: {
    width: 30,
    height: 30,
    backgroundColor: '#f0f0f0',
    borderRadius: 100,
  },
  input: {
    width: '100%',
    minHeight: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  scrollview: {
    width: '100%',
    padding: 12,
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
  safeareview: {
    justifyContent: 'center',
    flex: 1,
  },
  btnTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
});
