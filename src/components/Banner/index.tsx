import React, { Image, StyleSheet, View } from "react-native";

export const Banner = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://avatars.githubusercontent.com/u/45147892?v=4" }}
        style={styles.stretch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: "contain",
  },
});
