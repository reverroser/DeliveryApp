import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: "#fff"
  },
  submitCta: {
    marginTop: "auto",
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 8
  },
  textInput: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#f5f5f5",
    borderRadius: 8
  }
});

export default function OrderForm() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder="Name" />
      <TextInput style={styles.textInput} placeholder="Delivery Address" />
      <TextInput
        style={styles.textInput}
        multiline
        numberOfLines={4}
        placeholder="Special delivery instructions"
      />
      <View style={styles.submitCta}>
        <Button title="Submit" />
      </View>
    </View>
  );
}
