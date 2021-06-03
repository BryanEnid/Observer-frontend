import React, { useState } from 'react';
import { View, Text, FlatList, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  button: {
    paddingLeft: 35,
    paddingRight: 35,
  },
});

export default function Carrousel({ elements }) {
  // const [DATA, setDATA] = useState([...elements, ...elements, ...elements]);

  return (
    <View>
      <FlatList
        data={elements}
        renderItem={Item}
        keyExtractor={(item) => item.title}
        onEndReachedThreshold
        // onScroll={({}) => console.log(a)}
        horizontal
        centerContent
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

function Item({ item }) {
  const { title, action } = item;
  return (
    <TouchableWithoutFeedback>
      <View style={styles.button}>
        <Text>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
