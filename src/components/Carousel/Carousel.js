import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Text from '../../components/Text';
import { BlackPortal } from 'react-native-portal';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  button: {
    paddingLeft: 35,
    paddingRight: 35,
  },
});

export default function Carousel({ elements }) {
  const [Screen, setScreen] = useState(() => elements[0].component);

  const handleChange = (item) => !(Screen == item.component) && setScreen(() => item.component);

  return (
    <View>
      <FlatList
        data={elements}
        renderItem={({ item }) => <Item item={item} onChange={handleChange} />}
        keyExtractor={(item) => item.title}
        onEndReachedThreshold
        horizontal
        centerContent
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
      <BlackPortal name="Carrousel Screens">
        <Screen />
      </BlackPortal>
    </View>
  );
}

function Item({ item, onChange }) {
  return (
    <TouchableWithoutFeedback onPress={() => onChange(item)}>
      <View style={styles.button}>
        <Text>{item.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

Carousel.propTypes = {
  /**
   * Array of elements to render. Each item needs a title and a component to render, ex. {title: string, component: React.element}
   */
  elements: PropTypes.array.isRequired,
};
