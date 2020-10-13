import React, { useState } from "react";
import { View, StyleSheet, Text, Image, Button, Switch } from "react-native";

import menuItems from "../mocks/menuItems";

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
  allergens: {
    color: "rgba(0,0,0,0.6)",
    marginTop: 4,
    fontFamily: "Roboto_400Regular"
  },
  price: {
    marginTop: 8,
    fontSize: 16,
    fontFamily: "Roboto_400Regular"
  },
  side: {
    display: "flex",
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16
  },
  sideLabel: {
    fontSize: 16,
    marginLeft: 8,
    fontFamily: "Roboto_400Regular"
  },
  addToCart: {
    marginTop: "auto",
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 24
  }
});

export default function MenuItem({ route }) {
  const { id } = route.params;

  const menuItem = menuItems.find(menuItem => menuItem.id === id);

  const [isMushyPeasEnabled, setIsMushyPeasEnabled] = useState(false);

  const toggleMushyPeasSwitch = () =>
    setIsMushyPeasEnabled(previousState => !previousState);

  const onClickAddToCart = () => {};

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: menuItem.image_url
        }}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{menuItem.name}</Text>
        <Text style={styles.description}>{menuItem.description}</Text>
        <Text style={styles.allergens}>{menuItem.allergens}</Text>
        <Text style={styles.price}>£{menuItem.price}</Text>
      </View>
      <View style={styles.side}>
        <Switch
          onValueChange={toggleMushyPeasSwitch}
          value={isMushyPeasEnabled}
        />
        <Text style={styles.sideLabel}>Add mushy peas</Text>
      </View>
      <View style={styles.addToCart}>
        <Button title="Add to Cart" onPress={onClickAddToCart} />
      </View>
    </View>
  );
}
