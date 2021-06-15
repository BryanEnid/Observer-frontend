import React from "react";
import { SKILLS_CONFIG } from "../../components/SkillsCard/SkillsMockData";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, PlainCard, SkillsCard, SoftSkillsCard } from "../../components";
import { MaterialIcons } from "@expo/vector-icons";

const SoftSkillsConfig = require("../../components/SkillsCard/SoftSkills.json");

export default function componentName() {
  return (
    <View>
      {/* Here it goes The Title Section */}
      <View style={styles.titleSection}>
        <Text variant="h2">About</Text>
        <Text style={styles.moreDetailsLink}>Values & Goals</Text>
      </View>

      {/* Here it goes the Plain Card Component */}
      <PlainCard />

      {/* Here it goes the Skills Title Section */}
      <View style={styles.titleSection}>
        <Text variant="h3">Skills</Text>
        <Text style={styles.moreDetailsLink}>View all</Text>
      </View>

      {/* Here it goes the Skills Card Section */}
      <View style={styles.skillsCardsContainer}>
        <SkillsCard items={SKILLS_CONFIG} />
      </View>

      {/* Here it goes the Skills Card Section */}
      <View style={styles.skillsCardsContainer}>
        <SoftSkillsCard items={SoftSkillsConfig} />
      </View>

      {/* Here it goes the hidden section */}
      <View style={styles.hiddenSection}>
        <TouchableOpacity>
          <MaterialIcons name="keyboard-arrow-down" size={40} color="black" />
        </TouchableOpacity>
      </View>

      {/* Here it goes the experience section */}
      <View style={styles.experience_title_section}>
        <Text variant="h3">Experience</Text>
        <Text style={styles.moreDetailsLink}>View all</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleSection: {
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  moreDetailsLink: {
    color: "#add8e6",
    fontWeight: "bold",
  },
  plainCard: {
    marginBottom: 20,
  },
  skillsCardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
  },
  hiddenSection: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  experience_title_section: {
    marginTop: 40,
    marginHorizontal: 10,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }
  
});
