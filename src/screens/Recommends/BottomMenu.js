import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import { Text } from '../../components';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    borderColor: '#CFCFCF',
    flex: 5,
  },
  postBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function RecommendsBottomMenu() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
        <TextInput style={styles.textInput} placeholder="Post an article link" keyboardType="url" />
        <View style={styles.postBtn}>
          <Text variant="button" style={{ fontSize: 16 }}>
            Post
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
        <TextInput
          style={styles.textInput}
          placeholder="Why did you recommend?"
          keyboardType="url"
        />
        <View style={styles.postBtn}>
          <SimpleLineIcons name="microphone" size={25} />
        </View>
        <View style={styles.postBtn}>
          <AntDesign name="videocamera" size={25} />
        </View>
      </View>
    </View>
  );
}
