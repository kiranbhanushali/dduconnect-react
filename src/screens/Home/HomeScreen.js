import React,{ Component ,PropType } from 'react';
import {FlatList,ImageBackground,View,ActivityIndicator,ScrollView,Image, Dimensions,StyleSheet,Picker} from 'react-native';
import {Header,Separator,Title,Card,Text,Left,Right,Button,Body,Container,Icon, Row,} from 'native-base';

import Buzz from '../../components/Buzz'
import LatestArticle from '../../components/LatestArticle'
import Category from '../../components/Category'
import OneSignal from 'react-native-onesignal';


import { TouchableOpacity } from 'react-native-gesture-handler';

  
export default class HomeScreen extends Component{
	static navigationOptions = ({navigation}) =>{
		return {
			headerTitle: <Text style={{fontFamily:'Montserrat-Bold',fontWeight:'900'}}> DDUConnect </Text>,
			headerLeft: (
				<Button transparent  onPress={navigation.toggleDrawer}>
					<Icon name='menu'  />
				</Button>
			),
			
		}

	}

	constructor(props) {
		super(props);
		this.state ={ isLoading: true, }

	  }
	
	
	render(){
		
		
		// if(this.state.isLoading){
		// 	return(
		// 	  <View style={{flex: 1,justifyContent:'center',padding: 20}}>
		// 		<ActivityIndicator size='large'/>
		// 	  </View>
		// 	)
		// }
		
		return(
			<Container style={styles.container}>
				
			<ScrollView>			
				<View style={{margin:5}}></View>
				<Category navigation={this.props.navigation}/>

				<Text style={{fontSize:20,paddingLeft:10,fontFamily:'Montserrat-Light',fontWeight:'bold'}}>Latest Articles</Text>
				<LatestArticle  navigation={this.props.navigation}/>

				<Text style={{fontSize:20,paddingLeft:10,fontFamily:'Montserrat-Bold',fontWeight:'bold'}} >Buzz</Text>
				<Buzz navigation={this.props.navigation}/>
			</ScrollView>

		</Container>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		fontFamily:'Montserrat-Medium'
	  },

}
);
