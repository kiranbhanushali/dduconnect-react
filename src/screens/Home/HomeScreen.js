import React,{ Component ,PropType } from 'react';
import {FlatList,ImageBackground,View,ActivityIndicator,ScrollView,Image, Dimensions,StyleSheet} from 'react-native';
import {Header,Separator,Title,Card,Text,Left,Right,Button,Body,Container,Icon, Row} from 'native-base';

import Buzz from '../../components/Buzz'
import LatestArticle from '../../components/LatestArticle'
import Category from '../../components/Category'
import OneSignal from 'react-native-onesignal';

import {
	Menu,
	MenuOptions,
	MenuOption,
	MenuTrigger,
  } from 'react-native-popup-menu';
import { TouchableOpacity } from 'react-native-gesture-handler';

  
export default class HomeScreen extends Component{
	static navigationOptions = ({navigation}) =>{
		return {
			headerTitle: <Text style={{fontFamily:'Montserrat-Bold',fontWeight:'900'}}> DDUConnect </Text>,
			headerLeft: (
				<Button transparent onPress={navigation.toggleDrawer}>
					<Icon name='menu' />
				</Button>
			),
			headerRight:(
				<TouchableOpacity style={{marginRight:10}}>
					<Icon type="FontAwesome" name='ellipsis-v' />
				</TouchableOpacity>
			),
		}

	}

	// componentDidMount(){
	// 	if(!this.state.articles){
	// 		return fetch('https://dduconnect.in/wp-json/wp/v2/posts/?_embed&per_page=8&fields=id,title,date,categories,link,_links')
	// 		.then((response) => response.json())
	// 		.then((responseJson) => {
	// 			this.setState({
	// 			isLoading: false,
	// 			articles: responseJson,
	// 			}, function(){
		
	// 			});
		
	// 		})
	// 		.catch((error) =>{
	// 			console.error(error);
	// 		});
	// 	}
	// 	// else{
	// 	// 	this.setState(isLoading: false,);
	// 	// }
	//   }


	constructor(props) {
		super(props);
		this.state ={ isLoading: true,}

		// OneSignal.init("e043b947-9048-4f03-8b97-f3a4c7765310");
		// OneSignal.addEventListener("received", this.onReceived);
		// OneSignal.addEventListener("opened", this.onOpened);
		// OneSignal.addEventListener("ids", this.onIds);
	

	
	  }
	//   onReceived = notification => {
	// 	console.log("Notification received: ", notification);
	//   };
	
	//   onOpened = openResult => {
	// 	console.log("Message: ", openResult.notification.payload.body);
	// 	console.log("Data: ", openResult.notification.payload.additionalData);
	// 	console.log("isActive: ", openResult.notification.isAppInFocus);
	// 	console.log("openResult: ", openResult);
	//   };
	
	//   onIds = device => {
	// 	console.log("Device info: ", device);
	// 	this.setState({ device });
	//   };

	
	render(){
		// console.log(this.props.navigation);	

		// console.log(this.state);
		
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
