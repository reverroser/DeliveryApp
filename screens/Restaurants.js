import React, { createRef, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

import restaurants from "../mocks/restaurants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  search: {
    margin: 16,
    padding: 16,
    backgroundColor: "#f5f5f5",
    borderRadius: 8
  },
  item: {
    padding: 16,
    fontSize: 18,
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8"
  },
  itemContent: {
    flex: 1,
    paddingLeft: 16,
    fontSize: 18,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
    marginTop: 4,
    fontFamily: "Lato_400Regular"
  },
  description: {
    fontSize: 12,
    fontFamily: "Roboto_400Regular"
  }
});

export default function Restaurants({ navigation }) {
  const searchInputRef = createRef();

  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  const onClickRestaurant = ({ id }) => {
    navigation.navigate("Restaurant", {
      id
    });
    searchInputRef.current.clear();
    onSearchChange();
  };

  const onSearchChange = text => {
    if (!text) {
      setFilteredRestaurants(restaurants);
      return;
    }

    setFilteredRestaurants(
      restaurants.filter(({ name }) =>
        name.toLocaleLowerCase().includes(text.toLocaleLowerCase())
      )
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={searchInputRef}
        style={styles.search}
        onChangeText={onSearchChange}
        allowFontScaling={true}
        clearButtonMode={"always"}
        placeholder={"Search restaurants"}
      />
      <FlatList
        data={filteredRestaurants}
        renderItem={({ item }) => (
          <View
            style={styles.item}
            onTouchStart={() => onClickRestaurant(item)}
          >
            <Image
              style={styles.image}
              source={{
                uri: item.image_url
              }}
            />
            <View style={styles.itemContent}>
              <Text style={styles.name}>{item.name}</Text>
              <Text numberOfLines={3} style={styles.description}>
                {item.description}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
