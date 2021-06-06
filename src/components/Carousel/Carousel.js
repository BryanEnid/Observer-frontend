import React, { useState, useEffect, useContext } from 'react';
import { View, FlatList, TouchableWithoutFeedback, TouchableOpacity, StyleSheet } from 'react-native';
import { Text, PortalContext } from '../../components';
import { PortalGate } from '../Portal';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  button: {
    paddingLeft: 35,
    paddingRight: 35,
  },
});

export default function Carousel({ elements }) {
  return (
    <View>
      <FlatList
        data={elements}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.title}
        onEndReachedThreshold
        horizontal
        centerContent
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

function Item({ item, onChange }) {
  const { teleport } = useContext(PortalContext);
  const { title, component: Component } = item;
  return (
    <TouchableWithoutFeedback onPress={() => teleport('ProfileCarouselScreens', <Component />)}>
      <View style={styles.button}>
        <Text>{title}</Text>
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
