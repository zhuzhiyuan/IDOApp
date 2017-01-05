/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MessageBox from './MessageBoxView';
import NavBar from '../../util/NavBar';

export default class MessageIndex extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
         <Navigator
          style={styles.container}
          initialRoute={{name:"MessageBox",title:'消息',component:MessageBox}}
          renderScene={(route,navigator)=>{
            let Component = route.component;
            if(route.component){
              return <Component {...route.params} navigator={navigator}/>
            }
          }}
          configureScene={(route)=>{
            if(route.sceneConfig){
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FadeAndroid;
          }}
          navigationBar={
              <NavBar/>
          }
        />
    );
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
   }
})
