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
  Text,
  View
} from 'react-native';

import MessageSession from './MessageSessionView';
import {Height} from '../../style/Theme';

export default class MessageBox extends Component {
  constructor(props) {
    super(props);
    
  }
  componentDidMount() {
  }
  render() {
    return (
        <View style={{paddingTop:Height.NavBar}}>
          <TouchableOpacity
              onPress={() => this.props.navigator.push({
                showNav:true,
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
