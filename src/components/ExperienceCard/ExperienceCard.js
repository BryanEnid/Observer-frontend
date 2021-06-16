import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Text } from "..";

export default function ExperienceCard({ experince }) {
  return (
    <View style={styles.experience_card_container}>
      <View style={styles.blue_point_container}>
        <View style={styles.blue_point}></View>
      </View>
      <View style={styles.experience_card}>
        {experince.icon}
        <View>
          <Text style={styles.card_title}>{experince.title}</Text>
          <Text style={styles.card_subtitle}>{experince.company}</Text>
          <Text style={styles.card_timing}>{experince.period}</Text>
        </View>
        <View>
          <Image />
          <Entypo name="controller-play" size={24} color="black" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  blue_point: {
    borderRadius: 60,
    backgroundColor: "#add8e6",
    flex: 0,
    width: 10,
    height: 10,
    marginHorizontal: 10,
  },
  experience_card: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 30,
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
  card_title: {
    fontSize: 12,
    fontWeight: "800",
  },
  card_subtitle: {
    fontSize: 11,
    fontWeight: "200",
  },
  card_timing: {
    fontSize: 11,
    color: "gray",
  },
  experience_card_container: {
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
