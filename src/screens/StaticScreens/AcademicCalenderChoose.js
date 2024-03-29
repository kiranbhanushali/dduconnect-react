import React  , { Component ,PropType } from 'react';
import { View ,Text ,TouchableOpacity,StyleSheet,Image,StatusBar} from 'react-native';
import { Body,Icon,Button } from 'native-base';
import {Header} from 'react-native-elements'
export default class AcademicCalenderScreen extends Component{
	
  render() {
    return (
      
        
            
      <Body style={{padding:0}}>
          <Header backgroundColor='#fff'>
          
          <Button transparent onPress={this.props.navigation.toggleDrawer}>
          <Image
						style={{width: 27, height:27 }}
						source={require('../../assets/images/menu.png')}
						/>
          </Button>
          <Text style={{fontFamily:'Montserrat-Bold',fontWeight:'900',marginTop:'5%'}}> Academic Calender </Text>
          </Header>     
      
          <StatusBar translucent backgroundColor="rgba(0,0,0,0.5)" />
        

        <View style={{flex:1,paddingHorizontal:10}}>
      

        <View style={styles.separator} />
        <Button transparent onPress={() => { this.props.navigation.navigate('AcademicCalender',{d:1});}}>
        <Text style={styles.ButtonLayout} >SEM 1, 2</Text>
      </Button>
     
      <View style={styles.separator} />
      <Button transparent onPress={() => {this.props.navigation.navigate('AcademicCalender',{d:2})}}>
        <Text  style={styles.ButtonLayout} >SEM 4, 6, 8 </Text>
      </Button>
        
          
      <View style={styles.separator} />
          

     </View>

        
        
      </Body>
     
    );
  }
}



const styles = StyleSheet.create({
  ButtonLayout: { fontSize: 15, color: '#000000', backgroundColor: "#ffffff", padding: 8,width:'100%',fontWeight:"bold"}
  ,
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: 2,
  },
  container: {
    flex: 1,
    marginTop: 2,
    marginHorizontal: 16,
  },
  iconstyle: {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.0)',
    padding: 7,
    borderRadius: 10,
  },
  titlestyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.0)',
    padding: 7,
    borderRadius: 10,
  },
  separator: {
    marginVertical: 0.2,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
