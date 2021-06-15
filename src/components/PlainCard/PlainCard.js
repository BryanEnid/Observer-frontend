import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "..";

export default function ({ content }) {
  return (
    <View style={styles.card}>
      <Text style={styles.lineBreak}>
        Hello, my name is Earl Livingston and I like seagulls. I genuinely care
        about the enviroment. I am a graduate from Harvard & MIT.
      </Text>
      <Text style={styles.lineBreak}>
        I am an avid a designer and a generalist engineer who wishes to focus on
        products that are sustainable and impactful to the world.
      </Text>
      <Text style={styles.lineBreak}>
          wwww.earltheseagull.com
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
