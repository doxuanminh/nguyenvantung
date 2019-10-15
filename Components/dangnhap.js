import React, { Component } from 'react';
import {   SafeAreaView,TextInput,
    StyleSheet,TouchableOpacity,
    ScrollView,Image, ImageBackground,
    View,Alert,
    Text,
    StatusBar, } from 'react-native';
export default class DangNhap extends Component {
    constructor (props) {
        super(props),
        this.state = {
          Email: '',
          pass:'',
          oldEmail: 'u',
          oldPass: '123456',
        }
     }
    
     _ChangeEmail= (text) => {
      this.setState({ Email: text })
    }
    _Changepass= (text) => {
      this.setState({ pass: text })
    }
    _onpress=() =>{
      if(this.state.Email == "" || this.state.pass == ""){
        Alert.alert("Bạn không được bỏ trống!");
      }else if(this.state.Email==this.state.oldEmail && this.state.pass == this.state.oldPass){
        Alert.alert("Đăng nhập thành công!!");
        this.props.navigation.navigate('Homes')
      }else{
        Alert.alert("Bạn đã nhập sai tài khoản hoặc mật khẩu!");
        this.setState({
          Email: "",
          pass: "",
        });
      }
    
    }
  render() {
    return (
        <View style={style.khung}>
        <ImageBackground source={require("../src/anh/anhbia.jpg")} style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <View style={style.khung2}>
            <View style={style.khunglog}>
              <Text style={style.label}>User Name</Text>
              <TextInput onChangeText={this._ChangeEmail} placeholder=' abc@gamil.com' style={style.ipuser}/>
              <Text>PassWord</Text>
              <TextInput  onChangeText={this._Changepass}  secureTextEntry={true} style={style.ipuser}/>
            </View>

            <View style={style.bt}>
            <TouchableOpacity onPress={this._onpress}>
              <View style={style.btlog}>
                   <Text style={{textAlign:'center',marginTop:7}}>Đăng Nhập</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Dangkis')}>
              <View style={style.btlog}>
                   <Text style={{textAlign:'center',marginTop:7}}>Đăng Kí</Text>
              </View>
          </TouchableOpacity>
            </View>
        </View>
        </ImageBackground>




    </View>
    );
  }
}
const style = StyleSheet.create({
    khung:{
        flex:1,
        alignItems: 'center'
    },
    khung1:{

    },
    label:{

    },
    khung2:{
        backgroundColor:'rgba(255,255,255,0)',justifyContent: 'center',alignItems: 'center'
    },
    khung3:{
        backgroundColor:'red'
    },
    ipuser:{
        borderRadius:14,height: 35,width:220, borderColor: 'gray', borderWidth: 1
    },
    bt:{
        
        flexDirection:'row'
    },
    btlog:{
        width:110,height:40,backgroundColor:'gray',marginTop:5,borderRadius:14,opacity:0.7
    }

})