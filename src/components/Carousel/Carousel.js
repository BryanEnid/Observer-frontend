import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { BlackPortal } from "react-native-portal";
import PropTypes from "prop-types";

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
        renderItem={({ item }) => (
          <Item item={item} onChange={(Component) => handleChange(Component)} />
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

function Item({ item, onChange }) {
  const { title, component: Component } = item;
  return (
    <>
      <TouchableWithoutFeedback onPress={() => onChange(Component)}>
        <View style={styles.button}>
          <Text>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
      <BlackPortal name="wow">
        <Component />
      </BlackPortal>
    </>
  );
}
