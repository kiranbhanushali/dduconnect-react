import React  , { Component } from 'react';
import { View ,Text , StyleSheet, Image,} from 'react-native';
import { Header } from 'react-native-elements';
import {Icon,Button} from 'native-base';
export default class CopyrightsScreen extends Component{
static navigationOptions = {
    drawerLabel: 'Copyrights',
    
  };
	render(){
		return (
			<View style={{flex:1,marginTop:-20}}>
				<Header backgroundColor='fff' >
				<Button transparent onPress={this.props.navigation.toggleDrawer}>
					<Icon name='menu' />
				</Button>
				<Text style={{fontFamily:'Montserrat-Bold',fontWeight:'900'}}> ContactUs </Text>
				</Header>  


				<View style={styles.container}>
	
			  <Text style={{padding:10,fontSize:28}}>DDUConnect</Text>
			  <Text style={{padding:10,fontSize:18}}>Version 1.0.0</Text>
			  <Image
				source={{
				  uri:'https://dduconnect.in/wp-content/uploads/2018/11/cropped-Connect_logo_1000_1000-e1544269480643-3.png',
				}}
				style={{ width: 300, height: 96 }}
			  />
				 <Text style={{padding:40}}> {'\u00A9'} www.dduconnect.in </Text>
			</View>

			</View>
			
		  );
	}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    paddingTop: 20,
    backgroundColor: '#ffe',
    padding: 8,	
  },
  
});
