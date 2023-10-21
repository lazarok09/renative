import { Image, StyleSheet, View } from "react-native";
import React from "react";

export const Banner = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={{
          uri: "https://static.wikia.nocookie.net/simpsons/images/6/69/Sr_tennyss.png/revision/latest?cb=20150501214237&path-prefix=pt",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 200,
    alignContent: "center",
    alignItems: "center",
  },
  stretch: {
    width: 250,
    height: 200,
    resizeMode: "contain",
  },
});
