import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../../components';
import { About } from '.';

const styles = StyleSheet.create({
  about: {},
});

export default function Resume() {
  return (
    <View>
      <About />
    </View>
  );
}
