import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  divider: {
    width: '40%',
    borderWidth: 0.5,
    borderRadius: 0.25,
  },
});

export default function Divider({ style, ...rest }) {
  return <View testID="divider" style={{ ...styles.divider, ...style }} {...rest} />;
}
