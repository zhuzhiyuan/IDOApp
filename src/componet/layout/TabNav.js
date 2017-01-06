/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'
import Color from '@assets/Style'
import MessageIndex from '@componet/message/MessageIndex';
import ChartIndex from '@componet/chart/ChartIndex'
import LogIndex from '@componet/log/LogIndex'
import ContactIndex from '@componet/contact/ContactIndex'
import MyIndex from '@componet/my/MyIndex'
import Images from '@assets/Images'

export default class TabNav extends Component {
  constructor(props) {
    super(props);
    this.state={
      selectedTab:'message'
    }
    
  }
  componentDidMount() {
    
  }
  _renderTabNavigatorItem(tag,imgNor,img,title,component){
    return(
       <TabNavigator.Item
          selected={this.state.selectedTab === tag}
          title={title}
          renderIcon={() => <Image source={imgNor} style={styles.iconStyle} />}
          renderSelectedIcon={() => <Image source={img} style={styles.iconStyle} />}
          onPress={() => this.setState({ selectedTab: tag })}>
         {component}
        </TabNavigator.Item>
    );
  }

  static _createComponent(component,props){
      let Component = component;
      if(component){
        return <Component  {...props}/>
      }
      return null;
  }

  render() {
    return (
      <TabNavigator
      tabBarStyle={{backgroundColor:'#CFE2E9'}}
      tabBarShadowStyle={{backgroundColor:Color.bgColor}}
      >
        {this._renderTabNavigatorItem('message',Images.nav_messageNor,Images.nav_message,'消息',TabNav._createComponent(MessageIndex,this.props))}
        {this._renderTabNavigatorItem('chart',Images.nav_chartNor,Images.nav_chart,'目标',TabNav._createComponent(ChartIndex,this.props))}
        {this._renderTabNavigatorItem('log',Images.nav_dayNor,Images.nav_day,'日志',TabNav._createComponent(LogIndex,this.props))}
        {this._renderTabNavigatorItem('contact',Images.nav_contactNor,Images.nav_contact,'联系人',TabNav._createComponent(ContactIndex,this.props))}
        {this._renderTabNavigatorItem('my',Images.nav_myNor,Images.nav_my,'我的',TabNav._createComponent(MyIndex,this.props))}
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  iconStyle:{
    maginTop:5,
    width:15,
    height:15
  },
  textStyle:{
    color:Color.bgColor
  },
  selectedTitleStyle:{
    color:'#ffffff'
  },
  iconStyle:{
    width:30,
    height:30
  },
  selectItemStyle:{
    backgroundColor:Color.bgColor
  }
});
