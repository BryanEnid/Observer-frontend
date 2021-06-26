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
    marginTop: 10,
    marginHorizontal: 10,
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
    marginTop: 40,
    marginHorizontal: 10,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  experience_section_line: {
    position: 'absolute',
    top: 0,
    left: -13,
    width: 1,
    height: '100%',
    backgroundColor: 'black',
    marginLeft: 25,
  },
  lineBreak: {
    marginBottom: 5,
  },
  expand_button: {
    textAlign: 'center',
    marginTop: 10,
  },
});

export default function Resume() {
  return (
    <View>
      <View name="About Section">
        {/* <View style={styles.titleSection}>
        <Text variant="h2">About</Text>
        <Text variant="button">Values & Goals</Text>
      </View> */}

        {/* Here it goes the Plain Card Component */}
        {/* <Card style={{ paddingTop: 30 }}>
        <Text style={styles.lineBreak}>{BIO_MOCK_DATA.lineOne}</Text>
        <Text style={styles.lineBreak}>{BIO_MOCK_DATA.lineTwo}</Text>
        <Text style={styles.lineBreak}>{BIO_MOCK_DATA.landingLink}</Text>
        <Text style={styles.expand_button} variant="button">
          Expand
        </Text>
      </Card> */}
      </View>

      <View name="Skill Section">
        {/* <View style={styles.titleSection}>
          <Text variant="h2">Skills</Text>
          <Text style={styles.moreDetailsLink} variant="button">
            View all
          </Text>
        </View>

         // marginBottom: 20,
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
        </View> */}
      </View>

      {/* Here it goes the experience section */}
      <View name="Experience Section">
        <View style={styles.experience_title_section}>
          <Text variant="h3">Experience</Text>
          <Text style={styles.moreDetailsLink}>View all</Text>
        </View>

        {/* Here it goes the experience card component */}
        <View>
          <View style={styles.experience_section_line} />
          {MOCK_EXPERIENCE_CONFIG.map((item, index) => {
            const isNotWrapper = (i) => {
              if (i === 0 || i === MOCK_EXPERIENCE_CONFIG.length - 1) return false;
              return true;
            };

            const [showExperienceDetails, setShowExperienceDetails] = useState(false);
            return (
              <TouchableOpacity
                onPress={() => setShowExperienceDetails(true)}
                style={styles.experience_section}
                key={item.title.trim().toLowerCase()}
              >
                <ExperienceCard
                  showDetail={showExperienceDetails}
                  setShowDetail={setShowExperienceDetails}
                  experience={item}
                  cardStyle={isNotWrapper(index) && { marginVertical: 20 }}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}
