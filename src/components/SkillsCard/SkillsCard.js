import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "..";

export default function ({ items }) {
  return (
    <>
      {items.map((item, index) => (
        <View style={styles.card} key={index}>
          {item.image}
          <Text style={styles.skill}>{item.skill}</Text>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
    borderRadius: 20,
  },
  skill: {
      fontSize: 11,
  }
});
