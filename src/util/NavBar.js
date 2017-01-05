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
  View,
  Text,
  PropTypes
} from 'react-native';
import Color from '../style/Theme'
export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const routeMapper = {
      LeftButton: (route, navigator, index, navState) => {
        if (index === 0) {
          return null
        }
        const previousRoute = navState.routeStack[index - 1]
        return (
          <View style={styles.navBarItem}>
            <TouchableOpacity
              onPress={() => navigator.pop()}>
              <Text style={styles.navText}>
                {route.title}
              </Text>
            </TouchableOpacity>
          </View>
        )
      },
      RightButton: (route, navigator, index, navState) => {
        let Element=route.rightElement;
        if(route.rightElement){
          return <View style={styles.navBarItem}>
            <Element/>
          </View>
        }
        
      },
      Title: (route, navigator, index, navState) => {
        return (
          <View style={styles.navBarItem}>
            <Text style={styles.navText}>{route.title}</Text>
          </View>
        )
      }
    }
    return (
      <Navigator.NavigationBar
        style={styles.navBar}
        routeMapper={routeMapper}
        {...this.props}
      />
    )
  }
}



const styles = StyleSheet.create({
  navBar: {
    height:40,
    backgroundColor:Color.bgColor,
    flex:1,
    flexDirection:'row'
   },
   navBarItem:{
     flex:1
   },
  navText: { 
    color:'#ffffff',
    fontSize:16,
    marginTop:5,
    lineHeight:40
  },
})