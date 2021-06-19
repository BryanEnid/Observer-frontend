import React, { useEffect } from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { Text } from "../../components";

// I Imported Dimension module for getting screen dimensions
const width = Dimensions.get("screen").width; // Screen Width
const spacing = 20; // Hard coded spacing for images
const imageDimension = width / 3 - spacing; // images dimensions

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  bucketImage: {
    borderRadius: imageDimension / 2, // border radius must be always the width/height divided by 2
    width: imageDimension,
    height: imageDimension,
  },
  card: {
    width: width / 3, // each card is taking a third of the screen
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 66,
    height: 58,
  },
});

// const arrayLength = 42;
// const fakeData = Array(arrayLength).fill(""); // Empty array with a length of 15

const fakeData = [
  {
    title: "Buzz light year",
    uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmoviealles.com%2Fwp-content%2Fuploads%2F2018%2F10%2FPoster-of-Uri-Movie.jpg&f=1&nofb=1",
  },
  {
    title: "Another",
    uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmoviealles.com%2Fwp-content%2Fuploads%2F2018%2F10%2FPoster-of-Uri-Movie.jpg&f=1&nofb=1",
  },
];

export default function Buckets() {
  return (
    <View style={styles.container}>
      {/* Array.map() is a function that iterates through an array and it return another array */}
      {fakeData.map((item, index) => (
        // We are returning each card.
        // In theory we should have dynamic data and then replacing each property with variables.
        // Read the comments below
        <View style={styles.card} key={index}>
          <Image
            style={styles.bucketImage}
            source={{
              uri: item.uri,
            }}
          />
          <Text variant="h3">{item.title}</Text>
        </View>
      ))}
    </View>
  );
}

// The code below is the same example as the existing code, but with dynamicly data.
// instead of hard typing values, we pass the values through params like "item".

// // "arrayOfObjects" is a "mock response" from a server.
// // So in theory you should get this data asynchronously from the server
// // with no need of hard typing it as so:
// // Buut for this example we need to do it.
// const arrayOfObjects = [
//   {
//     title: "Buzz light year",
//     uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmoviealles.com%2Fwp-content%2Fuploads%2F2018%2F10%2FPoster-of-Uri-Movie.jpg&f=1&nofb=1",
//   },
//   {
//     title: "Another",
//     uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmoviealles.com%2Fwp-content%2Fuploads%2F2018%2F10%2FPoster-of-Uri-Movie.jpg&f=1&nofb=1",
//   },
// ];
// {arrayOfObjects.map((item, index) => (
//   <View key={index}>
//     <Image source={{ uri: item.uri }} />
//     <Text variant="h3">{item.title}</Text>
//   </View>
// ))}

// If you want you can replace this code with the existing one, but dont forget about the styles.
