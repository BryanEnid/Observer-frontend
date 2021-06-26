import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    borderRadius: 30,
    backgroundColor: 'white',
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
});

export default ({ children, style }) => <View style={[styles.card, style]}>{children}</View>;
