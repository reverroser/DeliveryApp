import React from "react";
import { View, StyleSheet, Text } from "react-native";

import restaurants from "../mocks/restaurants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default function Restaurants({ route }) {
  const { id } = route.params;

  const restaurant = restaurants.find(restaurant => restaurant.id === id);

  return (
    <View style={styles.container}>
      <Text>I'm the Restaurants page {restaurant.name}</Text>
    </View>
  );
}
