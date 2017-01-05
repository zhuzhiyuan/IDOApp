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
import Color from '../../style/Theme'
import MessageIndex from '../message/MessageIndexView';
import MessageBox from '../message/MessageBoxView';
import ChartIndex from '../chart/ChartIndexView'
import LogIndex from '../log/LogIndexView'
import ContactIndex from '../contact/ContactIndexView'
import MyIndex from '../my/MyIndexView'

export default class TabNav extends Component {
  constructor(props) {
    super(props);
    this.state={
      selectedTab:'message'
    }
    
  }
  componentDidMount() {
    
  }
  render() {
    return (
      <TabNavigator
      tabBarStyle={{backgroundColor:'#CFE2E9'}}
      tabBarShadowStyle={{backgroundColor:Color.bgColor}}
      >
        <TabNavigator.Item
          selected={this.state.selectedTab === 'message'}
          title="消息"
          renderIcon={() => <Image source={require('../../image/nav/message_nor.png')} style={styles.iconStyle} />}
          renderSelectedIcon={() => <Image source={require('../../image/nav/message.png')} style={styles.iconStyle} />}
          onPress={() => this.setState({ selectedTab: 'message' })}>
          <MessageBox {...this.props} />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'chart'}
          title="目标"
          renderIcon={() => <Image source={require('../../image/nav/chart_nor.png')} style={styles.iconStyle} />}
          renderSelectedIcon={() => <Image source={require('../../image/nav/chart.png')} style={styles.iconStyle} />}
          onPress={() => this.setState({ selectedTab: 'chart' })}>
          <ChartIndex {...this.props} />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'log'}
          title="日志"
          renderIcon={() => <Image source={require('../../image/nav/day_nor.png')} style={styles.iconStyle} />}
          renderSelectedIcon={() => <Image source={require('../../image/nav/day.png')} style={styles.iconStyle} />}
          onPress={() => this.setState({ selectedTab: 'log' })}>
          <LogIndex {...this.props} />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'contact'}
          title="联系人"
          renderIcon={() => <Image source={require('../../image/nav/contact_nor.png')} style={styles.iconStyle} />}
          renderSelectedIcon={() => <Image source={require('../../image/nav/contact.png')} style={styles.iconStyle} />}
          onPress={() => this.setState({ selectedTab: 'contact' })}>
          <ContactIndex {...this.props} />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'my'}
          title="我的"
          renderIcon={() => <Image source={require('../../image/nav/my_nor.png')} style={styles.iconStyle} />}
          renderSelectedIcon={() => <Image source={require('../../image/nav/my.png')} style={styles.iconStyle} />}
          onPress={() => this.setState({ selectedTab: 'my' })}>
          <MyIndex {...this.props} />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  iconStyle:{
    width:26,
    height:26
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
