import React,{ Component ,PropType, Children } from 'react';
import {FlatList,ImageBackground,View,ScrollView,Image,TouchableOpacity, Dimensions,} from 'react-native';
import {Header,Title,Card,Text,Left,Right,Button,Boedy,Container,Icon, Row} from 'native-base';



export default class LatestArticle extends Component{

    
    handleClick = () => {
        const cid = this.props.categoryid;

       this.props.navigation.navigate('PostByCategory',{
           cid,navigation: this.props.navigation
       });
    }
    render(){
        
        
    return(
        <TouchableOpacity onPress={this.handleClick}>
            
           <Image  style={{flex:1,width:85,height:85}} source={this.props.source} />

        </TouchableOpacity>
    );
	}

}