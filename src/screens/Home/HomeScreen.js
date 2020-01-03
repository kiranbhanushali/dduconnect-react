import React,{ Component ,PropType } from 'react';
import {FlatList,ImageBackground,View,ActivityIndicator,ScrollView,Image, Dimensions,} from 'react-native';
import {Header,Separator,Title,Card,Text,Left,Right,Button,Body,Container,Icon, Row} from 'native-base';

import Buzz from '../../components/Buzz'
import LatestArticle from '../../components/LatestArticle'
import Category from '../../components/Category'

export default class HomeScreen extends Component{
	static navigationOptions = ({navigation}) =>{
		return {
			headerTitle: <Text> DDUConnect </Text>,
			headerLeft: (
				<Button transparent onPress={navigation.toggleDrawer}>
					<Icon name='menu' />
				</Button>
			),
			headerRight:(
				<Button transparent>
					<Icon type="FontAwesome" name='ellipsis-v' />
				</Button>
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
	
	  }

	
	
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
			<Container>
			<ScrollView>
				<Separator >
					<Text>Category</Text>
				</Separator>
				<Category navigation={this.props.navigation}/>

				<Separator >
					<Text>LatestArticle</Text>
				</Separator>

					<LatestArticle  navigation={this.props.navigation}/>

				<Separator >
					<Text>Buzz</Text>
				</Separator>
					<Buzz navigation={this.props.navigation}/>
			</ScrollView>

		</Container>
		);
	}

}
