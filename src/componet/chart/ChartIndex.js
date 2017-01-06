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
export default class ChartIndex extends Component {
  constructor(props) {
    super(props);
    this.props.route.title="目标";
  }
  render() {
    return (
       <View>
        <Text>this is chart page</Text>
       </View>
    );
  }
}