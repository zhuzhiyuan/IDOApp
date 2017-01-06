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
import {Height} from '@assets/Style';

export default class MessageSession extends Component {
  constructor(props) {
    super(props);
    this.props.route.title='会话';
  }
  render() {
    return (
        <View>
            <Text>this is a message session page</Text>
        </View>
    );
  }
}
