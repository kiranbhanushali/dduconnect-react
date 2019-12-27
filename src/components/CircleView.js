import React,{ Component ,PropType, Children } from 'react';
import {FlatList,ImageBackground,View,ScrollView,Image,TouchableOpacity, Dimensions,} from 'react-native';
import {Header,Title,Card,Text,Left,Right,Button,Boedy,Container,Icon, Row} from 'native-base';



export default class LatestArticle extends Component{

    render(){
    
    return(
        <View style={{underlayColor:'#ececec',}}>
            
           <Image  style={{flex:1,width:85,height:85}} source={this.props.source} />
          

        </View>
    );
	}

}