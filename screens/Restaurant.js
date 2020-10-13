import React from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";

import menuItems from "../mocks/menuItems";
import restaurants from "../mocks/restaurants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    padding: 16
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 8,
    fontFamily: "Lato_700Bold"
  },
  description: {
    fontSize: 16,
    fontFamily: "Roboto_400Regular"
  },
  image: {
    width: "100%",
    height: 200
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
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8
  },
  itemName: {
    fontSize: 16,
    marginBottom: 8,
    fontFamily: "Lato_700Bold"
  },
  itemDescription: {
    fontSize: 12,
    fontFamily: "Roboto_400Regular"
  },
  itemPrice: {
    fontSize: 14,
    marginTop: 4,
    fontFamily: "Roboto_400Regular"
  }
});

export default function Restaurant({ route, navigation }) {
  const { id } = route.params;

  const restaurant = restaurants.find(restaurant => restaurant.id === id);

  const onClickMenuItem = ({ id }) => {
    navigation.navigate("MenuItem", {
      id
    });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: restaurant.image_url
        }}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.description}>{restaurant.description}</Text>
      </View>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <View style={styles.item} onTouchStart={() => onClickMenuItem(item)}>
            <Image
              style={styles.itemImage}
              source={{
                uri: item.image_url
              }}
            />
            <View style={styles.itemContent}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text numberOfLines={2} style={styles.itemDescription}>
                {item.description}
              </Text>
              <Text style={styles.itemPrice}>£{item.price}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
