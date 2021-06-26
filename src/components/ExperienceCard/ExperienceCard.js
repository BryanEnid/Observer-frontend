import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Text, Card } from '..';

const styles = StyleSheet.create({
  blue_point_container: {
    borderRadius: 50,
    // borderColor: 'red',
    backgroundColor: '#C5E4FF',
    // padding: 5,
    height: 15,
    width: 15,
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
  experience_info: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  experience_card: {
    flexDirection: 'row',
  },
  card_title: {
    fontSize: 12,
    fontWeight: '800',
  },
  card_subtitle: {
    fontSize: 11,
    fontWeight: '200',
  },
  card_timing: {
    fontSize: 11,
    color: 'gray',
  },
  experience_card_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video_button: {
    borderColor: 'white',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video_image: {
    position: 'relative',
    width: 70,
    height: 70,
    borderRadius: 25,
  },
  involvement_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  involvement_title: {
    marginLeft: 55,
    fontSize: 12,
    fontWeight: 'bold',
  },
  involvement_content: {
    fontSize: 9,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  position_column: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 55,
  },
  period_column: {
    flex: 0,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  close_button: {
    marginTop: 20,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  close_button_tag: {
    color: '#add8e6',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default function ExperienceCard({ experience, showDetail, setShowDetail, cardStyle }) {
  return (
    <View style={styles.experience_card_container}>
      {/* Column 1 */}
      <View style={styles.blue_point_separator}>
        <View style={styles.blue_point_container}>
          <View style={styles.blue_point} />
        </View>
      </View>

      {/* Column 2 */}
      <Card style={[styles.experience_card, cardStyle]}>
        <View style={{ flexDirection: 'column', flex: 1 }}>
          {/* Row 1 */}
          <View style={{ flexDirection: 'row' }}>
            {/* Column A.1 */}
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {experience.icon}
            </View>

            {/* Column A.2 */}
            <View style={{ flex: 3, justifyContent: 'center' }}>
              <View>
                <Text variant="h3">{experience.title}</Text>
                <Text>{experience.company}</Text>
                <Text style={{ fontFamily: 'Quicksand_300' }}>{experience.period}</Text>
              </View>
            </View>

            {/* Column A.3 */}
            <View style={{ flex: 2 }}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image style={styles.video_image} source={experience.bgImg} />
                <Entypo
                  style={{
                    position: 'absolute',
                    color: 'white',
                  }}
                  name="controller-play"
                  size={40}
                  color="black"
                />
              </View>
            </View>
          </View>

          {/* Row 2 */}
          {showDetail && (
            <>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }} />
                <View style={{ flex: 5, flexDirection: 'column' }}>
                  <View style={{ flexDirection: 'row', marginBottom: 10, marginTop: 20 }}>
                    <Text variant="h3">Involvement</Text>
                  </View>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                      <Text>CS Club President</Text>
                      <Text>Honors Society</Text>
                      <Text>Calculus Tutor</Text>
                      <Text>Pike Fraternity</Text>
                      <Text>President's List</Text>
                    </View>

                    <View style={{ alignItems: 'flex-end' }}>
                      <Text>Spring 1982</Text>
                      <Text>1980-1984</Text>
                      <Text>Fall 1984</Text>
                      <Text>1980-1984</Text>
                      <Text>Spring 1980, Fall 1981</Text>
                    </View>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}
              >
                <Text
                  variant="button"
                  style={{ flex: 1, textAlign: 'center', marginVertical: 5 }}
                  onPress={() => setShowDetail(false)}
                >
                  Close
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </Card>
    </View>
  );

  // eslint-disable-next-line no-unreachable
  return (
    <View style={styles.experience_card_container}>
      <View style={styles.blue_point_separator}>
        <View style={styles.blue_point_container}>
          <View style={styles.blue_point} />
        </View>
      </View>

      <Card style={[styles.experience_card, cardStyle]}>
        <View style={styles.experience_info}>
          {experience.icon}

          <View>
            <Text style={styles.card_title}>{experience.title}</Text>
            <Text style={styles.card_subtitle}>{experience.company}</Text>
            <Text style={styles.card_timing}>{experience.period}</Text>
          </View>
          <View style={styles.video_button}>
            <Image style={styles.video_image} source={experience.bgImg} />
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
            <TouchableOpacity onPress={() => setShowDetail(false)} style={styles.close_button}>
              <Text style={styles.close_button_tag}>Close</Text>
            </TouchableOpacity>
          </>
        )}
      </Card>
    </View>
  );
}
