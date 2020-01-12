/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { incrementBy, decrementBy } from "./action";

class App extends Component {
  _renderBtn = (title, operation) => {
    return (
      <TouchableOpacity style={styles.customBtnBG} onPress={operation}>
        <Text style={styles.customBtnText}>{title}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
    <View style={styles.container}>
        {this._renderBtn("-", this._decrement)}
        <Text style={styles.counter}>{this.props.counter}</Text>
        {this._renderBtn("+", this._increment)}
    </View>
    )
  }

  _increment = () => {
    this.props.add(factor);
  };

  _decrement = () => {
    this.props.remove(factor);
  };

}

const mapDispatchToProps = dispatch => {
  return {
    add: by => {
      dispatch(incrementBy(by));
    },
    remove: by => {
      dispatch(decrementBy(by));
    }
  };
};

const mapStateToProps = state => {
  return {
    counter: state.counterOperation.counter
  };
};

const factor = 1;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1
  },
  operationBtn: {
    paddingLeft: "20",
    paddingRight: "20",
    paddingTop: "5",
    paddingBottom: "5"
  },
  counter: {
    fontSize: 40,
    fontWeight: "400",
    color: "#007aff",
    minWidth: 100,
    textAlign: "center"
  },
  customBtnText: {
    fontSize: 40,
    fontWeight: "400",
    color: "#fff",
    textAlign: "center"
  },
  customBtnBG: {
    backgroundColor: "#007aff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    minWidth: 50
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);