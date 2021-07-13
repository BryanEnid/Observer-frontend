import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { Portal } from '../Portal';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    marginVertical: 20,
  },
});

export default function BottomMenuGate() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="position">
      <Portal name="BottomMenu" />
    </KeyboardAvoidingView>
  );
}
