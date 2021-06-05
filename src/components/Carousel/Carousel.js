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
  const InitialComponent = elements[0].component;
  const [Component, setComponent] = useState(InitialComponent);

  const handleChange = (Module) => {
    setComponent(<Module />);
  };

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
      <BlackPortal name="wow">{Component}</BlackPortal>
    </View>
  );
}

function Item({ item, onChange }) {
  const { title, component: Component } = item;

  return (
    <>
      <TouchableWithoutFeedback onPress={() => onChange(Component)}>
        <View style={styles.button}>
          <Text>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
