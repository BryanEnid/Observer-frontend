import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "..";

export default function ({ content }) {
  return (
    <View style={styles.card}>
      <Text style={styles.lineBreak}>
        {content.lineOne}
      </Text>
      <Text style={styles.lineBreak}>
        {content.lineTwo}
      </Text>
      <Text style={styles.lineBreak}>
          {content.landingLink}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
  },

  lineBreak: {
      marginBottom: 5,
  }
});
