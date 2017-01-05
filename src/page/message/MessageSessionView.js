/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Height} from '../../style/Theme';

export default class MessageSession extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <View style={{paddingTop:Height.NavBar}}>
            <Text>this is a message session page</Text>
        </View>
    );
  }
}
