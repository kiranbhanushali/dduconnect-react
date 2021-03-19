import React  , { Component ,PropType } from 'react';
import { View ,Text ,StatusBar} from 'react-native';
import RootStackNavigator from './screens/Navigation/RootStackNavigator'



export default class Index extends Component{
	
	 

render(){ 
<StatusBar translucent backgroundColor="rgba(0,0,0,0.5)" />
    return <RootStackNavigator />
	

   }//render

}