import React  , { Component ,PropType } from 'react';
import { View ,Text ,Button,TouchableOpacity} from 'react-native';
import { Body,Icon } from 'native-base';

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
      <Body>
        <View style={{backgroundColor:'#ececec',padding:10,alignItems:'center'}}>
        <TouchableOpacity  onPress={() => { this.props.navigation.navigate('Members',{d:1});}}>
          <Text style={{fontSize:15}} >Editorial</Text>
        </TouchableOpacity>
        </View>
        
        <TouchableOpacity onPress={() => {}}>
          <Text style={{fontSize:15}} >DESIGNING</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Text style={{fontSize:15}} >EVENT MANAGEMENT  ADVERTISING</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Text style={{fontSize:15}} >FINANCE</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Text  style={{fontSize:15}}>PHOTOGRAPHY</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Text  style={{fontSize:15}}>WEB DEVELOPMENT</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Text style={{fontSize:15}} >SUPPORTING</Text>
        </TouchableOpacity>
        
      </Body>
    );
  }
}
