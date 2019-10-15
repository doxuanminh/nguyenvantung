import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity,ActivityIndicator,
    TextInput, StyleSheet} from 'react-native';
import Drawer from 'react-native-drawer';
import User from './user';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://192.168.1.92:8080/ApiReactNative/product.php')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
  
    this._drawer.open()
  
  };
   
  render() {
    
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
        <View style = {Styles.viewAll}>
           <View style={{flex:7 ,}}>
                   <Drawer
                         openDrawerOffset={0.3}
                         tapToClose={true}
                      ref={(ref) => this._drawer = ref}
                      content={
                        <User/>
                      }>


                    <TouchableOpacity onPress={()=>this.openControlPanel()}>
                      <Image  style={{width:30,height:30,padding:3}} source ={require("../src/anh/iconstack2.png")}/>

                    </TouchableOpacity>
                    <TextInput placeholder=' What do you want to buy?' style={Styles.ipuser}/>

                         <View style={{flex:6,backgroundColor:"white",padding:5,justifyContent: 'center',alignItems: 'center'}}>
                             <FlatList
                             data={this.state.dataSource}
                             renderItem={({item}) => (
                                <TouchableOpacity onPress = {()=>{alert(item.tensp)}}>
                                  <View  style = {Styles.viewItem}>
                                    <View style = {Styles.viewImage}>
                                    <Image style={{width:150,height:250,}} source={{uri: item.hinhanh}} />
                                    </View>
                                    <View style = {Styles.viewText}>
                                      <Text>{item.tensp }</Text>
                                      <Text>{item.gia} $</Text>
                                    </View>
                                  </View>
                                </TouchableOpacity>
                                
                              )}
                          />
                           </View>
                  </Drawer>
                  
                </View>

            <View style={{flex:1/2,backgroundColor:'white',  borderWidth:1,borderColor:'gray',flexDirection:'row'}}>
               <Image  style={{width:35,height:39,marginLeft:10 }} source ={require("../src/anh/iconhome.jpg")}/>
               <Image  style={{width:35,height:39,marginLeft:120 }} source ={require("../src/anh/iconadd.jpg")}/>
               <Image  style={{width:32,height:39,marginLeft:120 }} source ={require("../src/anh/iconuser.png")}/>
            </View>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
    viewAll:{
        flex:1,
        backgroundColor:'#ae0105',
        flexDirection:'column'},

    viewItem:{padding:20, borderBottomColor:'white',borderBottomWidth:1,flex:1,flexDirection:'row'},
    viewImage:{},
    viewText:{ marginLeft:20, alignItems:'flex-start'},
    ipuser:{
       height: 33,width:320, borderColor: 'gray', borderWidth: 1,justifyContent: 'center',marginLeft:30,marginBottom:5
        
    },
  })
