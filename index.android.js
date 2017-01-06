/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry,NavigationExperimental } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Navigator from '@util/Navigation/Navigator'
import Images from '@assets/Images'
import Login from '@componet/account/Login'
const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
  Header:NavigationHeaderStatic,
  PropTypes: NavigationPropTypes
} = NavigationExperimental;
export default class IDOApp extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      // This defines the initial navigation state.
      navigationState: {
        index: 0, // Starts with first route focused.
        routes: [{key: '登录',component:Login}], // Starts with only one route.
      },
    };

    // We'll define this function later - hang on
    this._onNavigationChange = this._onNavigationChange.bind(this);
  }

  _onNavigationChange({type,key,component}) {
    // Extract the navigationState from the current state:
    let {navigationState} = this.state;

    switch (type) {
      case 'push':
        // Push a new route, which in our case is an object with a key value.
        // I am fond of cryptic keys (but seriously, keys should be unique)
        // Use the push reducer provided by NavigationStateUtils
        navigationState = NavigationStateUtils.push(navigationState, {key: 'Route-' + Date.now(),component});
        break;
      case 'pop':
        // Pop the current route using the pop reducer.
        navigationState = NavigationStateUtils.pop(navigationState);
        break;
        case 'replace':
        navigationState =NavigationStateUtils.replaceAt(navigationState,key,{key: 'Route-' + Date.now(),component});
        break;
    }
    // NavigationStateUtils gives you back the same `navigationState` if nothing
    // has changed. We will only update state if it has changed.
    if (this.state.navigationState !== navigationState) {
      // Always use setState() when setting a new state!
      this.setState({navigationState});
      // If you are new to ES6, the above is equivalent to:
      // this.setState({navigationState: navigationState});
    }
  }
  componentDidMount() {
    SplashScreen.hide();
  }
 render() {
    return (
      <Navigator
        navigationState={this.state.navigationState}
        onNavigationChange={this._onNavigationChange}
        onExit={this._exit}
      />
    );
  }
}
AppRegistry.registerComponent('IDOApp', () => IDOApp);

