import React,{ Component ,PropType, Children } from 'react';
import {FlatList,ActivityIndicator,ImageBackground,View,ScrollView,Image,TouchableOpacity, Dimensions,} from 'react-native';
import {Header,Title,Card,Text,Left,Right,Button,Body,Container,Icon, Row} from 'native-base';



export default class PostByCategoryScreen extends Component{

    static navigationOptions = ({navigation}) =>{
        //pending 
        const { params = {} } = navigation.state;
		return {
			headerTitle: <Text style={{color:'black'}}> {params.headerTitles} </Text>,
		
		}

    }
    
    constructor(props) {
        super(props);
        this.state={
            isLoading: true,
        }
        global.articles = this.state.articles;
    }

    componentDidMount(){
            // console.log(this)
            const CATEFORY_LINKS = {
                79:"'Tech' it easy",
                111:"Dentistry arround the gloabe",
                129:"Pharmacy: Then & Now",
                82:"Connect-ions",
                83:"Fiction",
                90:"Open Letter",
                91:"Verses",
                81:"Writers' Lounge ",
                133:"Alumni Speaks",
                134:"DDU Speaks",
                135:"Hall of Fame",
                132:"Interview",
                121:"More Content",
                84:"Non-Tech",
                80:"Tech",
            }; 
            const cid = this.props.navigation.state.params.cid;
            const cname = CATEFORY_LINKS[cid];  
            this.props.navigation.setParams({ headerTitles: cname });
            const base = `https://dduconnect.in/wp-json/wp/v2/posts/?categories=${cid}`;

            if(!this.state.articles){
                return fetch(base)
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

          
            
    }
    render(){
              
        if(this.state.isLoading){
			return(
			  <View style={{flex: 1,justifyContent:'center',padding: 20}}>
				<ActivityIndicator size='large'/>
			  </View>
			)
		}

        return(
            <Body>
          
          <View >
            <ScrollView>
              
            
			  <View style={{flex:1}}>
				
				  {this.state.articles.map((item, key) => (
						<View style={{ margin: 5}} key={key}>
							<Card style={{borderRadius: 20 }}>
							<ImageBackground 
									source={{
											uri:item.link,
											}}
									style={{ flex:1,width: 165, height: 100 }}
									imageStyle={{borderRadius: 10 }}>
						
									<View style={{flex:1,flexDirection:'column'}}>
										<View style={{
												flex:1,flexDirection:'column-reverse',padding:5,
											}}>
										
										
										 <Card  transparent>            
											<Text style={{ color: '#3f6f00',fontSize:10, fontWeight: '800' }}
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