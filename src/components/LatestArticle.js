import React,{ Component ,PropType } from 'react';
import {FlatList,AppRegistry,ImageBackground,View,ScrollView,Image, Dimensions,ActivityIndicator} from 'react-native';
import {Header,Title,Card,CardItem,Text,Left,Right,Button,Body,Container,Icon, Row} from 'native-base';
import PostScreen from '../screens/Post/PostScreen';
import CategoryHeader from './CategoryHeader';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';
import {widthPercentageToDP , heightPercentageToDP } from 'react-native-responsive-screen';

	


export default class LatestArticle extends Component{
  
	componentDidMount(){
		if(!this.state.articles){
			return fetch('https://dduconnect.in/wp-json/wp/v2/posts/?_embed&per_page=8&fields=id,title,date,categories,link,_links')
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
				isLoading: false,
				articles: responseJson,
				}, function(){
		
				});
		
			})
			.catch((error) =>{
				console.error(error);
			});
		}
		// else{
		// 	this.setState(isLoading: false,);
		// }
	  }
	  constructor(props) {
		super(props);
		this.state ={ isLoading: true,}
		global.articles = this.state.articles;
	}
	
	render(){

	if(this.state.isLoading){
		// console.log(this.state.isLoading);
		return(
			<View style={{flexDirection:'row',padding:10}}>
					<ContentLoader 
			height={110}
			width={widthPercentageToDP('43%') }
			speed={2}
			primaryColor="#f3f3f3"
			secondaryColor="#ecebeb"
		  >
		
		  </ContentLoader>
		  <View style={{paddingHorizontal:10,}}></View>
		  <ContentLoader 
			height={110}
			width={widthPercentageToDP('43%') }
			speed={2}
			
			primaryColor="#f3f3f3"
			secondaryColor="#ecebeb"
		  >
		
		  </ContentLoader>
		  <View style={{paddingHorizontal:10,}}></View>
		  <ContentLoader 
			height={110}
			width={widthPercentageToDP('43%') }
			speed={2}
			
			primaryColor="#f3f3f3"
			secondaryColor="#ecebeb"
		  >
		
		  </ContentLoader>
			</View>
		
		)
	}
		
    return(
        <Body>
          
          <View style={{ flexDirection: 'row' }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
			  <View style={{flex:1,flexDirection:'row'}}>
				
				  {this.state.articles.map((item, key) => (
						<View style={{ margin: 5}} key={key}>
							<Card style={{borderRadius: 20 }}>
							<ImageBackground 
									source={{
											uri:item._embedded['wp:featuredmedia'][0].source_url,
											}}
									style={{ flex:1,width:  widthPercentageToDP('43%') , height: 110 }}
									imageStyle={{borderRadius: 10 }}>
						
									<View style={{flex:1,flexDirection:'column'}}>
										<View
											style={{flex:1,paddingRight:8,paddingTop:4
											
											}}>
											<CategoryHeader data={item} />
											
										</View>
										<View style={{
												flex:1,flexDirection:'column-reverse',padding:5,
											}}>
										
										
										 <Card  transparent>            
											<Text style={{ color: '#fff',fontSize:10,fontWeight: 'bold' }}
												onPress={() => {
													// console.log(item._embedded['wp:featuredmedia'][0].source_url);
												 this.props.navigation.navigate('Post',item);
											}}>
												{item.title.rendered}
											</Text>

										</Card>
										</View>	
										
									</View>
									
								</ImageBackground>

							</Card>

						</View>
					))}


			  </View>
              
            </ScrollView>
          </View>
        </Body>
 
    );
	}

}