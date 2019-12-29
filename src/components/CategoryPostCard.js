import React,{ Component ,PropType } from 'react';
import {FlatList,AppRegistry,ImageBackground,View,ScrollView,Image, Dimensions, TouchableOpacity,} from 'react-native';
import {Header,Title,Card,CardItem,Text,Left,Right,Button,Body,Container,Icon, Row} from 'native-base';

export default class CategoryPostCard extends Component{

    constructor(props) {
		super(props);
		
      }
      _navigateToPost(){         
        this.props.navigation.navigate('Post',this.props.item);
      }

	render(){
    return(
        <View key = {this.props.key} style={{flex:1}}>
            <Card key = {this.props.key}  style={{width:'100%',borderRadius:20}}>
                
                    <Image style={{width:'100%',height:150,borderTopLeftRadius:20,borderTopRightRadius:20}} source={{uri: this.props.item._embedded['wp:featuredmedia'][0].source_url }} />
                  <View style={{flexDirection:'row',padding:8,alignSelf:'flex-end'}}>
                     <Text style={{paddingHorizontal:15,fontSize:14}}>{this.props.item.title.rendered}</Text>
                     <TouchableOpacity  style={{flex:1,}} onPress={this._onPressButton}>
                        <Icon name="heart"></Icon>
                    </TouchableOpacity>
                  </View>  

                    <View style={{padding:4}}>
                        <Text numberOfLines={5} style={{fontSize:10,paddingHorizontal:15}}>
                            {this.props.item.excerpt.rendered} 
                        </Text>
                        <TouchableOpacity onPress={this._navigateToPost} style={{flex:1,alignItems:'flex-end',marginEnd:10,paddingHorizontal:15}} onPress={this._onPressButton}>
                        <Text style={{fontSize:12}}> Read more </Text>
                    </TouchableOpacity>

                    </View>
                  <View style={{padding:4}}>
                  <Text style={{paddingHorizontal:15,fontSize:8,color:'#888'}}>{this.props.item.date}</Text>
                  </View>
                    
            </Card>  
        </View>
 
    );
	}

}