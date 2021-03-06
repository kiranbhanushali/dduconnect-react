import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  RefreshControl,
  TouchableHighlight

} from 'react-native';

import {Header,Title,Card,Text,Left,Right,Button,Body,Container,Icon, Row} from 'native-base';
import NetInfo from "@react-native-community/netinfo";

export default class FavouriteScreen extends Component{
  static navigationOptions = {
    drawerLabel: 'Favourite',
    
  };
  constructor(properties) {
		super(properties);
		this.state ={ refreshing: false, isConnected: true}
		
		this.timer = setInterval(()=> this.getConnectionStatus(), 1000)
	  }
	
	  getConnectionStatus(){
		NetInfo.fetch().then(state => {
			if ( this.state.isConnected != state.isConnected )
			{
				this.setState({isConnected : state.isConnected})
			// this.state.isConnected = state.isConnected;
				// console.log(this.state.isConnected);
			}
		});
	  }
  onRefresh = () => {
    this.setState({refreshing: true});
    this.setState({refreshing: false });
};
    render(){
      return (
        <View
          style={{ flex:1,width: '100%', height: '100%', backgroundColor: '#3D4051' }}>
            <TouchableHighlight>
              <View style={{backgroundColor:"red"}}>
                { 
                  this.state.isConnected ? null : <Text style={{alignSelf: "center", color: "white"}}>
                    No Internet Connection
                  </Text>
                }
              </View>
            </TouchableHighlight>
         <View style={{marginTop:20,marginLeft:20}}>
          <TouchableOpacity   onPress={this.props.navigation.toggleDrawer}>
            <Icon color='#fff' backgroundColor='#fff' style={{color:'#fff'}} name='menu' />
          </TouchableOpacity>
          </View>
          <SafeAreaView style={styles.con}>
            <ScrollView style={styles.scrollView}
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this.onRefresh}
                />
                }
            >
              <Text style={styles.text}>
                <Text style={{ fontWeight: 'bold', fontSize: 30 ,
      color: 'white'}}>
                  {' '}
                  {'\n'}
              
                  From The {'\n'} {'\t'} {'\t'}{'\t'}
                  <Text style={{ fontWeight: 'bold',color:'#db5b5c', fontSize: 30 }}> Editor's </Text>
                  Desk{' '}
                </Text>
                {'\n'}
                {'\n'}
                <Text style={{ fontWeight: 'bold' ,
      color: 'white'}}>
                  {' '}
                  It’s all about taking the first step.
                </Text>
                {'\n'}
                {'\n'}
                We all know about the growth of an eye-catching butterfly from an ugly looking caterpillar. Despite the cocoon being the comfort zone of the caterpillar, it has to take its first step that is to say to emerge from being in a cocoon. This process of metamorphosis is a great symbol for change, transition, adaptation, and growth. Comfort zones are simply our unchartered waters where our unrealized dreams are buried. Success begins when we step out of this zone. We must always trust our process, even if sometimes along the way things seem to be uncertain or nearly impossible.
                {'\n'}
                {'\n'}
                With never-ending possibilities in paving way for creativity, DDU Connect has taken a step forward in its sublime journey. Get ready to indulge yourselves in the world of uniqueness. Our writers are ready to take you to a new expedition through the Open Letter, Fiction, ‘Tech’ It Easy, Connect-ions and Writer’s Lounge. Get to know the various events taking place in the university through the DDU Buzz. Also for the creative minds of our university, we are soon bringing back our art related page named ‘Artisic Visions’.
                {'\n'}
                {'\n'}
                We, as always, await your stories of adventures and experiences at
                dduconnect@gmail.com.
  {'\n'}
                {'\n'}
                Sruthi Cheruvullil{'\n'}
        <Text style={{ fontWeight: 'bold',
      color: 'white' }}>         
  Editor-in-Chief</Text>
  {'\n'}
                {'\n'}
              </Text>
            </ScrollView>
          </SafeAreaView>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    cont: {
      flex: 1,
      marginTop: 1,
    },
    scrollView: {
      marginHorizontal: 20,
    },
    text: {
      fontSize: 14,
      color: 'white',
      marginBottom:50
    },
  });
  