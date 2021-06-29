import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SKILLS_CONFIG } from '../../components/SkillsCard/SkillsMockData';
import { Text, Card, SkillsCard, SoftSkillsCard, ExperienceCard } from '../../components';
import { BIO_MOCK_DATA } from '../../components/Card/MockContent';
import MOCK_EXPERIENCE_CONFIG from '../../components/ExperienceCard/ExperienceCard.config';

const SoftSkillsConfig = require('../../components/SkillsCard/SoftSkills.json');

// TODO: Create a theme for styles

const styles = StyleSheet.create({
  titleSection: {
    marginTop: 20,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  plainCard: {
    marginBottom: 20,
  },
  skillsCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hiddenSection: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  experience_title_section: {
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  experience_section_line: {
    position: 'absolute',
    alignSelf: 'center',
    width: 1,
    height: '100%',
    backgroundColor: '#999',
  },
  lineBreak: {
    marginBottom: 5,
  },
  expand_button: {
    textAlign: 'center',
    marginTop: 10,
  },
  blue_point_container: {
    borderRadius: 50,
    backgroundColor: '#C5E4FF',
    height: 13,
    width: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blue_point: {
    borderRadius: 5,
    backgroundColor: '#1CB9FE',
    height: 8,
    width: 8,
  },
  blue_point_separator: {
    borderRadius: 50,
    backgroundColor: 'white',
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Resume() {
  return (
    <View>
      <View name="About Section">
        <View style={styles.titleSection}>
          <Text variant="h1">About</Text>
          <Text variant="button">Values & Goals</Text>
        </View>

        <Card style={{ paddingTop: 30 }}>
          <Text style={styles.lineBreak}>{BIO_MOCK_DATA.lineOne}</Text>
          <Text style={styles.lineBreak}>{BIO_MOCK_DATA.lineTwo}</Text>
          <Text style={styles.lineBreak}>{BIO_MOCK_DATA.landingLink}</Text>
          <Text style={styles.expand_button} variant="button">
            Expand
          </Text>
        </Card>
      </View>

      <View style={styles.titleSection}>
        <Text variant="h1">Skills</Text>
        <Text style={styles.moreDetailsLink} variant="button">
          View all
        </Text>
      </View>
      <View style={styles.skillsCardsContainer}>
        <SkillsCard items={SKILLS_CONFIG} />
      </View>
      <View style={styles.skillsCardsContainer}>
        <SoftSkillsCard items={SoftSkillsConfig} />
      </View>
      <View style={styles.hiddenSection}>
        <TouchableOpacity>
          <MaterialIcons name="keyboard-arrow-down" size={40} color="black" />
        </TouchableOpacity>
      </View>

      <View name="Experience Section">
        <View style={styles.experience_title_section}>
          <Text variant="h1">Experience</Text>
          <Text style={styles.moreDetailsLink} variant="button">
            View all
          </Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, paddingTop: '30%', justifyContent: 'center' }}>
            <View style={styles.experience_section_line} />
          </View>

          <View style={{ flex: 8 }}>
            {MOCK_EXPERIENCE_CONFIG.map((item, index) => {
              const isNotWrapper = (i) => {
                if (i === 0 || i === MOCK_EXPERIENCE_CONFIG.length - 1) return false;
                return true;
              };

              const [showExperienceDetails, setShowExperienceDetails] = useState(false);
              return (
                <TouchableWithoutFeedback
                  onPress={() => setShowExperienceDetails(true)}
                  key={item.title.trim().toLowerCase()}
                >
                  <View style={{ flex: 1 }}>
                    <ExperienceCard
                      showDetail={showExperienceDetails}
                      setShowDetail={setShowExperienceDetails}
                      experience={item}
                      index={index}
                      cardStyle={isNotWrapper(index) && { marginVertical: 20 }}
                    />
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
}
