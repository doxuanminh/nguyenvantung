import React, { Component } from 'react';
import { Text, View } from 'react-native';
import DangKi from './Components/dangki';
import DangNhap from './Components/dangnhap';
import Home from './Components/home';
import User from './Components/user';
import Info from './Components/info';
import AppNavigator from './Components/route';



export default class HelloWorldApp extends Component {
  render() {
    return (
     <Home/>
    );
  }
}
