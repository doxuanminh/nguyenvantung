import React, { Component } from 'react';
import { Text, View,StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import User from './user';

export default class Info extends Component {
  render() {
    return (
      <View style={{flex:1}}>
          <View  style={{flex:1/3,justifyContent: 'center',alignItems: 'center',backgroundColor:'#EE6363'}}>
              <Text style={{fontSize:24,color:'white'}}>User Infomation</Text>
          </View>
          <View style={{flex:3,justifyContent: 'center',alignItems: 'center'}}>
          <TextInput  style={style.ipuser}>
              <Text>02</Text>
          </TextInput>
          <TextInput  placeholder=' abc@gamil.com' style={style.ipuser}/>
          <TextInput  placeholder=' abc@gamil.com' style={style.ipuser}/>
          <TouchableOpacity style={{height: 40,width:260,backgroundColor:'#EE6363',marginTop:7,borderRadius:14,justifyContent: 'center',alignItems: 'center',}}>
                      <Text>CHANGE YOUR INFOMATION</Text>

                    </TouchableOpacity>
          </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
    ipuser:{
        borderRadius:14,height: 40,width:260, borderColor: 'gray', borderWidth: 1,marginTop:7
    },
})

