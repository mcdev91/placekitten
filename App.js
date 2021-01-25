import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView
} from 'react-native';
import Buttons from './components/Buttons';
import Header from './components/Header';
import KittenList from './components/KittenList';

let imgUri = 'https://placekitten.com/1000/1000';

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <Header />
        <Buttons />
        <View style={styles.container}>
          <Image
            source={{ uri: imgUri }}
            style={styles.image}
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 170,
    height: 170,
    marginTop: 25
  }
})