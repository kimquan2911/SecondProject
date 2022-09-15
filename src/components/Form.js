import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class Form extends Component{
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={style.inputBox}/>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputBox: {
    width: 300,
    backgroundColor: 'white',
  }

});