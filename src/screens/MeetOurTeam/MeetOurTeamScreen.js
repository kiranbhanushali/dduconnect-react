import React  , { Component ,PropType } from 'react';
import { View ,Text ,TouchableOpacity,Picker} from 'react-native';
import { Body,Icon,Button } from 'native-base';
import {Header} from 'react-native-elements'
export default class MeetOurTeamScreen extends Component{
	// static navigationOptions = ({navigation}) =>{
	// 	return {
	// 		headerTitle: <Text style={{fontFamily:'Montserrat-Bold',fontWeight:'900'}}> MeetOurTeam </Text>,
	// 		headerLeft: (
	// 			<Button transparent onPress={navigation.toggleDrawer}>
	// 				<Icon name='menu' />
	// 			</Button>
	// 		),
	// 		headerRight:(
	// 			<TouchableOpacity >
	// 				<Icon type="FontAwesome" name='ellipsis-v' />
	// 			</TouchableOpacity>
	// 		),
	// 	}

	// }
  render() {
    return (
      
        
            
      <Body style={{marginTop:-20,padding:10}}>
          <Header backgroundColor='fff'>
          <Button transparent onPress={this.props.navigation.toggleDrawer}>
            <Icon name='menu' />
          </Button>
          <Text style={{fontFamily:'Montserrat-Bold',fontWeight:'900'}}> MeetOurTeam </Text>
          </Header>     
      
        
        <Button transparent onPress={() => { this.props.navigation.navigate('Members',{d:1});}}>
          <Text style={{fontSize:15}} >Editorial</Text>
        </Button>
       
        
        <Button transparent onPress={() => {this.props.navigation.navigate('Members',{d:0})}}>
          <Text style={{fontSize:15}} >DESIGNING</Text>
        </Button>

        <Button transparent onPress={() => {this.props.navigation.navigate('Members',{d:2})}}>
          <Text style={{fontSize:15}} >EVENT MANAGEMENT  ADVERTISING</Text>
        </Button>

        <Button  transparent onPress={() => {this.props.navigation.navigate('Members',{d:3})}}>
          <Text style={{fontSize:15}} >FINANCE</Text>
        </Button>

        <Button transparent onPress={() => {this.props.navigation.navigate('Members',{d:4})}}>
          <Text  style={{fontSize:15}}>PHOTOGRAPHY</Text>
        </Button>

        <Button transparent onPress={() => {this.props.navigation.navigate('Members',{d:5})}}>
          <Text  style={{fontSize:15}}>WEB DEVELOPMENT</Text>
        </Button>

        <Button transparent onPress={() => {this.props.navigation.navigate('Members',{d:6})}}>
          <Text style={{fontSize:15}} >SUPPORTING</Text>
        </Button>
        
      </Body>
     
    );
  }
}
