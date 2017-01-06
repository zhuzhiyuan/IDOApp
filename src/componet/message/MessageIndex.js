/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  TouchableOpacity,
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';

import MessageSession from '@componet/message/MessageSession';
import {Height} from '@assets/Style';
import Navigator from '@util/Navigation/Navigator'
class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.props.route.title='消息';
  }
  render() {
    return (
        <View>
          <TouchableOpacity
              onPress={() => this.props.navigator.push({
                showNavBar:true,
                title:'聊天',
                name:'MessageSession',
                component:MessageSession
              })}>
              <Text>this is a message box page</Text>
          </TouchableOpacity>
        </View>
    );
  }
}
export default class MessageIndex extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Navigator/>
    );
  }
}
