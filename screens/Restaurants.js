import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import restaurants from "../mocks/restaurants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});

export default function Restaurants() {
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
