import React, { Component } from 'react';
import {NavigationExperimental, StyleSheet,View,Text,Image, TouchableOpacity } from 'react-native';
import Images from '@assets/Images'
import Style from '@assets/Style'
const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
  Header:NavigationHeader
} = NavigationExperimental;
export default class Navigator extends Component {

  // This sets up the methods (e.g. Pop, Push) for navigation.
  
  constructor(props, context) {
    super(props, context);
    this.state={
      title:"",
      hideHeader:false,
      middleComponent:null,
      rightComponent:null
    }
    this._onPushRoute = this._onPushRoute.bind(this);
    this._onReplaceRoute=this._onReplaceRoute.bind(this);
    this._onPopRoute = this.props.onNavigationChange.bind(null, {type:'pop'});
    this._renderScene=this._renderScene.bind(this);
  }
  _onPushRoute({component}){
     this.props.onNavigationChange({type:'push',component});
  }
  _onReplaceRoute({key,component}){
    this.props.onNavigationChange({type:'replace',key,component});
  }

  // Now we finally get to use the `NavigationCardStack` to render the scenes.
  render() {
    return (
      <NavigationCardStack
        onNavigateBack={this._onPopRoute}
        navigationState={this.props.navigationState}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        style={styles.navigator}
      />
    );
  }
  _renderHeader=(sceneProps)=>{
    if(!sceneProps.scene.route.hideHeader){
      return (
          <NavigationHeader
            style={{backgroundColor:Style.bgColor,height:48}}
            {...sceneProps}
            renderLeftComponent={this._renderLeftComponent}
            renderTitleComponent={this._renderTitleComponent}
            renderRightComponent={this._renderRightComponent}
            onNavigateBack={this._onPopRoute}
            />
        )
    }else{
      return (<View style={{height:0}}></View>);
    }
    
  }
  _renderLeftComponent=(props)=>{
    if(props.navigationState.routes.length>1){
      return (
        <TouchableOpacity
        onPress={this._onPopRoute}
        >
          <View style={{marginTop:16}}>
          <Image source={Images.leftArrow} style={{width:15,height:15,marginLeft:15}}/>
          </View>
        </TouchableOpacity>
      );
    }
    
  }
  _renderRightComponent=(props)=>{
    let Component=props.scene.navigatorHeader;
    if(props.scene.navigatorHeader!=null){
      return props.scene.navigatorHeader;
    }
    return null;
  }
  _renderTitleComponent= (props) => {
    if(props.scene.route.middleComponent!=null){
      var Component=props.scene.route.middleComponent;
      return (<Component {...props}/>);
    }else{
      return (
        <View style={{flex:1,alignItems:"center",marginTop:14}}>
          <Text style={{color:'#fff'}}>{props.scene.route.title}</Text>
        </View>
    );
    }
    
  }
  // Render a scene for route.
  // The detailed spec of `sceneProps` is defined at `NavigationTypeDefinition`
  // as type `NavigationSceneRendererProps`.
  // Here you could choose to render a different component for each route, but
  // we'll keep it simple.
  _renderScene(sceneProps) {
      let Component=sceneProps.scene.route.component;
      if(sceneProps.scene.route.component!=null){
        let navigator={
          push:this._onPushRoute,
          pop:this._onPopRoute,
          replace:this._onReplaceRoute
        };
        return (
          <Component
            {...sceneProps}
            route={sceneProps.scene.route}
            navigator={navigator}
            onExit={this.props.onExit}
          />
        );
      }else{
        return(<View></View>);
      }
      
  }
}

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  }
});