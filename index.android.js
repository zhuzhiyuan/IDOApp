/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  View
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import LoginView from './src/page/account/LoginView';
import NavBar from './src/util/NavBar'
import {Height} from './src/style/Theme'
export default class IDOApp extends Component {
   constructor(props) {
    super(props);
    this.state={
      showNav:true
    }
  }
  componentDidMount() {
        SplashScreen.hide();
  }
  render() {
    let getNavBar=function(){
      console.log('showNav',this.state);
        return <NavBar/>;
    }
    return (
      <Navigator
      style={styles.container}
      initialRoute={{name:"login",component:LoginView}}
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
      onWillFocus={(route)=>{
        if(route.showNav){
          this.setState({showNav:true});
        }else{
          this.setState({showNav:false});
        }
      }}
      navigationBar={this.state.showNav?<NavBar/>:<View style={{height:0}}/>}
      />
    );
  }
}

AppRegistry.registerComponent('IDOApp', () => IDOApp);

const styles=StyleSheet.create({
  container: {
    flex: 1,
   }
})
