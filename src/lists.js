import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

const Lists = ({
  onClickList,
  changeStyle,
  place: { key, text, isChanged }
}) => {
  return (
    <View style={styles.listContainer}>
      <TouchableOpacity
        onPress={() => changeStyle(key)}
        style={{ width: "90%" }}
      >
        <Text style={isChanged ? styles.isDone : styles.isRemaining}>
          {text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onClickList(key)}
        style={styles.listButton}
      >
        <Text
          style={{
            color: "white",
            fontSize: 24,
            paddingLeft: 10,
            paddingRight: 10
          }}
        >
          X
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: "#eee",
    padding: 10,
    width: "100%",
    flexDirection: "row"
  },
  listButton: {
    justifyContent: "center",
    backgroundColor: "#1FBED6"
  },
  isDone: {
    fontSize: 20,
    width: "90%",
    textDecorationLine: "line-through"
  },
  isRemaining: {
    fontSize: 20,
    width: "90%",
    textDecorationLine: "none"
  }
});
export default Lists;
