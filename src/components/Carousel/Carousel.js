import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Text, PortalContext } from '..';

const styles = StyleSheet.create({
  button: {
    paddingLeft: 35,
    paddingRight: 35,
  },
});

export default function Carousel({ elements, gateNameRender }) {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const { teleport } = useContext(PortalContext);

  useEffect(() => {
    const InitialComponent = elements[0].component;
    teleport(gateNameRender, <InitialComponent />);
    return () => setCurrentItemIndex(0);
  }, []);

  const handleChange = (Component, index) => {
    if (currentItemIndex !== index) {
      teleport(gateNameRender, <Component />);
      setCurrentItemIndex(index);
    }
  };

  return (
    <View>
      <FlatList
        data={elements}
        renderItem={({ item, index }) => (
          <Item item={item} key={index} index={index} onChange={handleChange} />
        )}
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

function Item({ item, onChange, index }) {
  return (
    <TouchableWithoutFeedback onPress={() => onChange(item.component, index)}>
      <View style={styles.button}>
        <Text>{item.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

Carousel.propTypes = {
  /**
   * Array of elements to render. Each item needs a title and a component to render, ex.
   * {title: string, component: React.element}
   */
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      component: PropTypes.elementType.isRequired,
    })
  ).isRequired,

  /**
   * Name of the Portal were screens will be rendered.
   */
  gateNameRender: PropTypes.string.isRequired,
};
