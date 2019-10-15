import React, { Component } from 'react';
import {  SafeAreaView,TextInput,
    StyleSheet,TouchableOpacity,
    ScrollView,Image, ImageBackground,
    View,Alert,
    Text,
    StatusBar,} from 'react-native';

export default class DangKi extends Component {
  render() {
    return (
        <View style={ style.khung}>
        <View>
            <Text>Tên Người Dùng</Text>
            <TextInput onChangeText={this._ChangeEmail} placeholder=' abc@gamil.com' style={style.ipuser}/>
        </View>
        <View>
            <Text>Địa chỉ</Text>
            <TextInput onChangeText={this._ChangeEmail} placeholder=' abc@gamil.com' style={style.ipuser}/>
        </View>
        <View>
            <Text>Tên Đăng Nhập</Text>
            <TextInput onChangeText={this._ChangeEmail} placeholder=' abc@gamil.com' style={style.ipuser}/>
        </View>
        <View>
            <Text>Mật Khẩu</Text>
            <TextInput onChangeText={this._ChangeEmail} secureTextEntry={true} style={style.ipuser}/>
        </View>
        <View>
            <Text>Xác Nhận Mật Khẩu</Text>
            <TextInput onChangeText={this._ChangeEmail} secureTextEntry={true} style={style.ipuser}/>
        </View>


            <View>
                    <View style={style.bt}>
                        <TouchableOpacity onPress={this._onpress}>
                        <View style={style.btlog}>
                            <Text style={{textAlign:'center',marginTop:7}}>Đăng Kí</Text>
                        </View>
                         </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('DangNhaps')} >
                        <View style={style.btlog}>
                             <Text style={{textAlign:'center',marginTop:7}}>Hủy</Text>
                        </View>
                         </TouchableOpacity>
                </View>
            </View>
    </View>
    );
  }
}
const style = StyleSheet.create({
    khung:{
        justifyContent: 'center',alignItems: 'center',marginTop:50,
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
    });