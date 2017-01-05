/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Image,
  Button,
  View
} from 'react-native';
import Color from '../../style/Theme';
import {login} from '../../componet/account/LoginController';
import TabNav from '../layout/TabNav'
export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {account: '',password:''};
  }
  render() {
    return (
       <View style={styles.container}>
        <View style={styles.header}>
          <View style={{flex:1}}></View>
          <View style={{flex:1}}>
          <Image source={require('image!icon')} style={{maxHeight:100,maxWidth:100}} />
          </View>
        </View>
        <View style={styles.middle}>
          <View style={styles.inputView}>
            <Image source={require('../../image/login_account.png')}
            style={styles.inputIcon}
            />
              <TextInput
              style={styles.input}
              placeholder="请输入手机号!"
              placeholderTextColor={Color.font}
              onChangeText={(account) => this.setState({account})}
            />
          </View>
          <View style={styles.inputView}>
            <Image  source={require('../../image/login_password.png')}
            style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="请输入密码"
              placeholderTextColor={Color.font}
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password})}
            />
          </View>
          <View style={styles.bottonView}>
             <Button
              style={styles.button}
              title="登录"
              onPress={()=>{
                login(this.state.account,this.state.password,()=>{
                  this.props.navigator.replace({
                    name:'TabNav',
                    title:"消息",
                    showNav:true,
                    component:TabNav
                  });
                })
              }}/>
          </View>
        </View>
        <View style={styles.footer}>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Color.fore,
  },
  header:{
    justifyContent: 'center',
    flex:1,
  },
  middle:{
    maxWidth:350,
    minWidth:200,
    justifyContent: 'center',
    flex:1,
  },
  footer:{
    justifyContent: 'center',
    flex:1,
  },
  inputView:{
    flexDirection:'row',
    height:50,
  },
  inputIcon:{
    width:15,
    height:15,
    position:'absolute',
    top:18,
    left:7,
  },
  input:{
    flex:1,
    color:'#333333',
    paddingLeft:30,
    height:50,
    borderColor:Color.border
  },
  bottonView:{
    height:50
  },
  button:{
    borderColor: Color.border,
    backgroundColor: Color.bgColor,
    height:35,
    marginTop:10,
    color: '#ffffff'
  }
});
