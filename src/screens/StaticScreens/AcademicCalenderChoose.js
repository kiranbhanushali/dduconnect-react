import React  , { Component ,PropType } from 'react';
import { View ,Text ,TouchableOpacity,Picker} from 'react-native';
import { Body,Icon,Button } from 'native-base';
import {Header} from 'react-native-elements'
export default class AcademicCalenderScreen extends Component{
	
  render() {
    return (
      
        
            
      <Body style={{marginTop:-20,padding:10}}>
          <Header backgroundColor='fff'>
          <Button transparent onPress={this.props.navigation.toggleDrawer}>
            <Icon name='menu' />
          </Button>
          <Text style={{fontFamily:'Montserrat-Bold',fontWeight:'900'}}> AcademicCalender </Text>
          </Header>     
      
        
        <Button transparent onPress={() => { this.props.navigation.navigate('AcademicCalender',{d:1});}}>
          <Text style={{fontSize:15}} >SEM 2</Text>
        </Button>
       
        
        <Button transparent onPress={() => {this.props.navigation.navigate('AcademicCalender',{d:2})}}>
          <Text style={{fontSize:15}} >SEM 4 6 8 </Text>
        </Button>

        
        
      </Body>
     
    );
  }
}
