/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";

import Lists from "./src/lists";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      list: [{ key: "1", text: "Anmol", isChanged: false }]
    };
  }

  inputTextChangedHandler = text => {
    this.setState({
      inputText: text
    });
  };

  touchableHandler = () => {
    if (this.state.inputText.trim() === "") {
      return;
    }
    this.setState(prevState => {
      const todo = {
        text: this.state.inputText,
        isChanged: false,
        key: new Date().getTime()
      };
      return {
        list: prevState.list.concat(todo),
        inputText: ""
      };
    });
  };

  changeStyleHandler = key => {
    this.setState(prevState => {
      return {
        list: prevState.list.map(place => {
          return place.key === key
            ? { key: place.key, text: place.text, isChanged: !place.isChanged }
            : place;
        })
      };
    });
  };

  onDeletedHandler = key => {
    this.setState(prevState => {
      // console.log(key, prevState);
      return {
        list: prevState.list.filter(place => {
          return place.key !== key;
        })
      };
    });
  };

  render() {
    const listArray = this.state.list.map(place => {
      return (
        <Lists
          onClickList={this.onDeletedHandler}
          key={place.key}
          place={place}
          changeStyle={this.changeStyleHandler}
        />
      );
    });
    return (
      <View>
        <View style={styles.container}>
          <TextInput
            style={styles.inputContainer}
            onChangeText={this.inputTextChangedHandler}
            placeholder="Enter a todo"
            value={this.state.inputText}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={this.touchableHandler}
          >
            <Text>ADD</Text>
          </TouchableOpacity>
        </View>
        <View>{listArray}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    borderColor: "black",
    width: "100%",
    flexDirection: "row"
  },
  inputContainer: {
    width: "70%"
  },
  addButton: {
    width: "30%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "salmon"
  }
});

export default App;
