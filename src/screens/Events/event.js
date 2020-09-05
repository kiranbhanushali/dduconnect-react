import React,{ Component ,PropType } from 'react';
import {RefreshControl ,StyleSheet, StatusBar, SafeAreaView, Platform, TouchableHighlight, View, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import LiveEvents from './Live-Events.js';
import UpcomingEvents from './Upcoming-Events';
import PastEvents from './Past-Events';
import {Header} from 'react-native-elements'
import {Title,Card,Text,Left,Right,Button,Body,Container,Icon, Row} from 'native-base';
import NetInfo from "@react-native-community/netinfo";


const Tab = createMaterialTopTabNavigator();

export default class event extends Component{
  static navigationOptions = {
    drawerLabel: 'event',
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
    
    <SafeAreaView style={styles.container}>
    
    <NavigationContainer>
    
    <Header backgroundColor='fff' >
          <Button transparent onPress={this.props.navigation.toggleDrawer}>
            <Icon name='menu' />
          </Button>
          <Text style={{fontFamily:'Montserrat-Bold',fontWeight:'900'}}> Events </Text>
          </Header> 
          
          <TouchableHighlight>
				<View style={{backgroundColor:"red"}}>
					{ 
						this.state.isConnected ? null : <Text style={{alignSelf: "center", color: "white"}}>
							No Internet Connection
						</Text>
					}
				</View>
			</TouchableHighlight> 
      
      <Tab.Navigator>
      
        <Tab.Screen name="Past Events" component={PastEvents}/>
        <Tab.Screen name="Live Events" component={LiveEvents} />
        <Tab.Screen name="Upcoming Events" component={UpcomingEvents}/>
        
      </Tab.Navigator>
      
    </NavigationContainer>
    </SafeAreaView>
    
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: -20,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0s
  }
});