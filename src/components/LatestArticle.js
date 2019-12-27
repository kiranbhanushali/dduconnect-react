import React,{ Component ,PropType } from 'react';
import {FlatList,AppRegistry,ImageBackground,View,ScrollView,Image, Dimensions,} from 'react-native';
import {Header,Title,Card,CardItem,Text,Left,Right,Button,Body,Container,Icon, Row} from 'native-base';
import PostScreen from '../screens/Post/PostScreen';
import CategoryHeader from './CategoryHeader';
export default class LatestArticle extends Component{

    constructor(props) {
		super(props);
		
	  }

	render(){
		//  console.log(this.props);
    return(
        <Body>
          
          <View style={{ flexDirection: 'row' }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
			  <View style={{flex:1,flexDirection:'row'}}>
				
				  {this.props.data.map((item, key) => (
						<View style={{ margin: 5}} key={key}>
							<Card style={{borderRadius: 20 }}>
							<ImageBackground 
									source={{
											uri:item._embedded['wp:featuredmedia'][0].source_url,
											}}
									style={{ flex:1,width: 165, height: 100 }}
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