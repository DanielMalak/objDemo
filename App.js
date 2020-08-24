import React , { Component } from 'react';
import { SafeAreaView, Dimensions, TouchableOpacity, View, Text, StatusBar, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ModelView } from 'react-native-3d-model-view'

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export default class App extends React.Component {

  constructor(){
    
    super();
    this.state = {
      scale:1
    }
  }

  render() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flexDirection:'row'}}>
<ModelView
style={{height:h,width:w}}
  source={{ zip: 'https://github.com/BonnierNews/react-native-3d-model-view/blob/master/example/obj/Hamburger.zip?raw=true' }}
  scale={this.state.scale}
  // onLoadModelStart={this.onLoadModelStart}
  // onLoadModelSuccess={this.onLoadModelSuccess}
  // onLoadModelError={this.onLoadModelError}
  />
  <View style={{right:w*0.2,alignSelf:'center'}}>
  <TouchableOpacity onPress={() => this.setState({scale:this.state.scale+0.1})} style={{width:w*0.15,height:w*0.15,borderRadius:50,backgroundColor:'#AAAAAA',alignItems:'center',justifyContent:'center'}}><Icon name='plus' size={20} color='black'/></TouchableOpacity>
  <TouchableOpacity onPress={() => this.setState({scale:this.state.scale-0.1})} style={{width:w*0.15,height:w*0.15,borderRadius:50,backgroundColor:'#AAAAAA',alignItems:'center',justifyContent:'center',marginTop:w*0.05}}><Icon name='minus' size={20} color='black'/></TouchableOpacity>
  </View>
      </SafeAreaView>
    </>
  );

};
}