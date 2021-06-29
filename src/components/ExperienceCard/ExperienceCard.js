import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Text, Card } from '..';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
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
  experience_info: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  experience_card: {
    flex: 5,
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

export default function ExperienceCard({
  experience,
  showDetail,
  setShowDetail,
  cardStyle,
  index,
}) {
  const saveLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    console.log(height);
    console.log(index);
  };

  return (
    <>
      {/* <View
        style={{
          // position: 'absolute',
          zIndex: 10,
          width,
          // justifyContent: 'center',
          // alignItems: 'center',
        }}
      >
        <View style={{ backgroundColor: 'red', flex: 1 }}>
          <View style={styles.blue_point_separator}>
            <View style={styles.blue_point_container}>
              <View style={styles.blue_point} />
            </View>
          </View>
        </View>

        <View style={{ flex: 1, backgroundColor: 'red' }} />
      </View> */}

      <View style={styles.experience_card_container}>
        <Card style={[styles.experience_card, cardStyle]} onLayout={saveLayout}>
          <View style={{ flexDirection: 'column', flex: 1 }}>
            {/* Row 1 */}
            <View style={{ flexDirection: 'row' }}>
              {/* Column A.1 */}
              <View
                style={{
                  flex: 1,
                  paddingRight: 5,
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
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}
                >
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

                      <View style={{ alignItems: 'flex-end', paddingRight: 20 }}>
                        <Text>Spring 1982</Text>
                        <Text>1980-1984</Text>
                        <Text>Fall 1984</Text>
                        <Text>1980-1984</Text>
                        <Text>Spring 1980, Fall 1981</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <TouchableWithoutFeedback
                  style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}
                >
                  <Text
                    variant="button"
                    style={{ flex: 1, textAlign: 'center', marginTop: 10 }}
                    onPress={() => setShowDetail(false)}
                  >
                    Close
                  </Text>
                </TouchableWithoutFeedback>
              </>
            )}
          </View>
        </Card>
      </View>
    </>
  );
}
