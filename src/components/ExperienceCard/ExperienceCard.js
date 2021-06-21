import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Text } from "..";

export default function ExperienceCard({ experince, showDetail, setShowDetail }) {
  return (
    <View style={styles.experience_card_container}>
      <View style={styles.blue_point_container}>
        <View style={styles.blue_point}></View>
      </View>
      <View style={styles.experience_card}>
        <View style={styles.experience_info}>
          {experince.icon}
          <View>
            <Text style={styles.card_title}>{experince.title}</Text>
            <Text style={styles.card_subtitle}>{experince.company}</Text>
            <Text style={styles.card_timing}>{experince.period}</Text>
          </View>
          <View style={styles.video_button}>
            <Image style={styles.video_image} source={experince.bgImg} />
            <Entypo
              style={styles.video_image_icon}
              name="controller-play"
              size={40}
              color="black"
            />
          </View>
        </View>
        {showDetail && (
          <>
            <Text style={styles.involvement_title}>Involvement</Text>
            <View style={styles.involvement_container}>
              <View style={styles.position_column}>
                <Text>CS Club President</Text>
                <Text>Honors Society</Text>
                <Text>Calculus Tutor</Text>
                <Text>Pike Fraternity</Text>
                <Text>President's List</Text>
              </View>
              <View style={styles.period_column}>
                <Text>Spring 1982</Text>
                <Text>1980-1984</Text>
                <Text>Fall 1984</Text>
                <Text>1980-1984</Text>
                <Text>Spring 1980, Fall 1981</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => setShowDetail(false) } style={styles.close_button}>
              <Text style={styles.close_button_tag}>Close</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  blue_point_container: {
    backgroundColor: "white",
    width: 20,
    height: 20,
  },
  blue_point: {
    borderRadius: 60,
    backgroundColor: "#add8e6",
    flex: 0,
    width: 10,
    height: 10,
    marginHorizontal: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  experience_info: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  experience_card: {
    flex: 4,
    marginHorizontal: 10,
    marginVertical: 3,
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
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  video_button: {
    borderColor: "white",
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  video_image: {
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  video_image_icon: {
    position: "absolute",
    color: "white",
  },
  involvement_container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
  },
  involvement_title: {
    marginLeft: 55,
    fontSize: 12,
    fontWeight: "bold",
  },
  involvement_content: {
    fontSize: 9,
    flexDirection: "column",
    justifyContent: "center",
  },
  position_column: {
    flex: 2,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 55,
  },
  period_column: {
    flex: 0,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  close_button: {
    marginTop: 20,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "center",
  },
  close_button_tag: {
    color: "#add8e6",
    fontWeight: "bold",
    fontSize: 14,
  },
});
