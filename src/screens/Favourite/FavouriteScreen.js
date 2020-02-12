import React  , { Component ,PropType } from 'react';
import { View ,Text ,Button} from 'react-native';

export default class FavouriteScreen extends Component{
	static navigationOptions = () =>{
		return {
			headerTitle: <Text> Favourite</Text>,
		}
	}
	render(){
		return <Text> FavouriteScreen </Text>
	}

}