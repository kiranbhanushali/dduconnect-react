import React  , { Component } from 'react';
import { View ,Text  StyleSheet, Image} from 'react-native';

export default class CopyrightsScreen extends Component{
static navigationOptions = {
    drawerLabel: 'Copyrights',
    
  };
	render(){
		return (
			<View style={styles.container}>
			  <Text style={{padding:10}}>DDUConnect</Text>
			  <Text style={{padding:10}}>Version 1.0.0</Text>
			  <Image
				source={{
				  uri:'https://dduconnect.in/wp-content/uploads/2018/11/cropped-Connect_logo_1000_1000-e1544269480643-3.png',
				}}
				style={{ width: 200, height: 72 }}
			  />
				 <Text style={{padding:10}}> {'\u00A9'}dduconnect.in </Text>
			</View>
		  );
	}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ffe',
    padding: 8,	
  },
  
});
