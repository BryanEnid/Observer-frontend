import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  divider: {
    width: "30%",
    borderWidth: 1,
    borderRadius: 1,
  },
});

export default function Divider({ style, ...rest }) {
  return <View style={{ ...styles.divider, ...style }} {...rest} />;
}
