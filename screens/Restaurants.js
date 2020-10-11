import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

import restaurants from "../mocks/restaurants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  item: {
    padding: 16,
    fontSize: 18
  },
  search: {
    margin: 16,
    padding: 16,
    backgroundColor: "#f5f5f5",
    borderRadius: 8
  }
});

export default function Restaurants() {
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  const onSearchChange = text => {
    setFilteredRestaurants(
      restaurants.filter(({ name }) =>
        name.toLocaleLowerCase().includes(text.toLocaleLowerCase())
      )
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        onChangeText={onSearchChange}
        allowFontScaling={true}
        clearButtonMode={"always"}
        placeholder={"Search restaurants"}
      />
      <FlatList
        data={filteredRestaurants}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
