import React,{ Component ,PropType } from 'react';
import {FlatList,ImageBackground,View,ScrollView,Image, Dimensions,} from 'react-native';
import {Header,Title,Card,Text,Left,Right,Button,Body,Container,Icon, Row} from 'native-base';

export default class Buzz extends Component{

    constructor(props) {
		super(props);
		const slides = [
		  {
			key: '1',
			title: 'BLOOD DONATION CAMP ORGANIZED BY NSS',
			imguri: 'https://dduconnect.in/wp-content/uploads/2019/09/WhatsApp-Image-2019-09-13-at-00.03.38-1.jpeg',
			uri:'https://dduconnect.in/blood-donation-camp-organized-by-nss/',
			content:`It is truly said that or a noble cause for the betterment of society by conducting various events at university.  The camp began at 10:00 AM in the morningand received a great pfrom the donors across different 
					 departments, all day long. `,
			backgroundColor: '#20d2bb',
		  },
		  {
			key: '2',
			title: 'BLOOD DONATION CAMP ORGANIZED BY NSS',
			imguri: 'https://dduconnect.in/wp-content/uploads/2019/09/WhatsApp-Image-2019-09-13-at-00.03.38-1.jpeg',
			uri:'https://dduconnect.in/blood-donation-camp-organized-by-nss/',
			content:`It is truly said that or a noble cause for the betterment of society by conducting various events at university.  The camp began at 10:00 AM in the morning and received a great pfrom the donors across different 
					 departments, all day long. `,
			backgroundColor: '#20d2bb',
		  },
		  {
			key: '3',
			title: 'BLOOD DONATION CAMP ORGANIZED BY NSS',
			imguri: 'https://dduconnect.in/wp-content/uploads/2019/09/WhatsApp-Image-2019-09-13-at-00.03.38-1.jpeg',
			uri:'https://dduconnect.in/blood-donation-camp-organized-by-nss/',
			content:`It is truly said that or a noble cause for the betterment of society by conducting various events at university.  The camp began at 10:00 AM in the morningand received a great pfrom the donors across different 
					 departments, all day long. `,
			backgroundColor: '#20d2bb',
		  },
		  {
			key: '4',
			title: 'BLOOD DONATION CAMP ORGANIZED BY NSS',
			imguri: 'https://dduconnect.in/wp-content/uploads/2019/09/WhatsApp-Image-2019-09-13-at-00.03.38-1.jpeg',
			uri:'https://dduconnect.in/blood-donation-camp-organized-by-nss/',
			content:`It is truly said that or a noble cause for the betterment of society by conducting various events at university.  The camp began at 10:00 AM in the morning and received a great pfrom the donors across different 
					 departments, all day long. `,
			backgroundColor: '#20d2bb',
		  },
		];
		global.slides = slides;
	  }
	 


	render(){
    return(
        <Body>

          <View style={{ flexDirection: 'row',flexWrap: 'wrap',flexShrink: 1 }}>
            <ScrollView
              showsHorizontalScrollIndicator={false}>
			  <View style={{flex:1,flexWrap: 'wrap',flexShrink: 1}}>

					{global.slides.map((item, key) => (
						<View key={key}>
							<Card style={{height:200,borderRadius: 10,flexWrap: 'wrap',flexShrink: 1}}>
										<ImageBackground 
												source={{
														uri: item.imguri,
														}}
												style={{ flex:5, height: 140,borderRadius: 10}}  imageStyle={{borderTopLeftRadius:10,borderTopRightRadius:10}}>
									
												<View style={{flex:1,flexDirection:'column-reverse',borderRadius: 10}}>
												
														<Text style={{ color: '#fff',fontSize:14, fontWeight: '200' }}
															onPress={() => {
																// console.log(this.props);
															this.props.navigation.navigate('Post',item);
														}}>
															{item.title}
														</Text>

												</View>

										</ImageBackground>
										<View
											style={{ flex:2,
												height:60,backgroundColor:'#ececec'
											}}>
											<Text style={{ color: '#606070',fontSize:10 }}>
												{item.content}
											</Text>
											<Text style={{ color: '#228B22' }}>{item.text}</Text>
										</View>
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