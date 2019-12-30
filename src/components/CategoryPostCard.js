import React,{ Component ,PropType } from 'react';
import {FlatList,AppRegistry,ImageBackground,View,ScrollView,Image, Dimensions, TouchableOpacity,} from 'react-native';
import {Header,Title,Card,CardItem,Text,Left,Right,Button,Body,Container,Icon, Row} from 'native-base';
import moment from "moment";

export default class CategoryPostCard extends Component{

    constructor(props) {
		super(props);
		this.state={

    }
    }
    componentDidMount(){
      var tempdetails= this.props.item.excerpt.rendered;
      tempdetails = tempdetails.replace("<p>", "");
      tempdetails = tempdetails.replace("</p>", "");
      tempdetails = tempdetails.replace("[&hellip;]", "");
      tempdetails = tempdetails.replace("&#8211;", "-");
      tempdetails = tempdetails.replace("&#8220;", "\"");
      tempdetails = tempdetails.replace("&#8221;", "\"");
      tempdetails = tempdetails.replace("&#8216;", "\'");
      tempdetails = tempdetails.replace("&#8217;", "\'");
      tempdetails = tempdetails.replace("&nbsp;", " ");
      tempdetails = tempdetails.replace("&#038;", "&");
      var title= this.props.item.title.rendered;
      title = title.replace("&#8211;", "-");
      title = title.replace("&#8220;", "\"");
      title = title.replace("&#8221;", "\"");
      title = title.replace("&#8216;", "\'");
      title = title.replace("&#8217;", "\'");
      title = title.replace("&#038;", "&");
      title = title.replace("&nbsp;", " ");
      console.log(tempdetails);
      this.setState({
        title,
        tempdetails,
      })
    }


	render(){
   

    return(
        <View key = {this.props.item.id} style={{flex:1}}>
            <Card key = {this.props.item.id}  style={{width:'100%',borderRadius:20}}>
                
                   <View>
                   <Image style={{width:'100%',height:150,borderTopLeftRadius:20,borderTopRightRadius:20}} source={{uri: this.props.item._embedded['wp:featuredmedia'][0].source_url }} />
                   </View> 
                  <View style={{flexDirection:'row',padding:8,flex:1}}>
                     <Text style={{paddingHorizontal:15,fontSize:14,flex:8,}}>{this.state.title}</Text>
                     <TouchableOpacity  style={{alignItems:'flex-end',flex:1}} onPress={this._onPressButton}>
                        <Icon name="heart"></Icon>
                    </TouchableOpacity>
                  </View>  

                    <View style={{padding:4,marginTop:-15}}>
                        <Text numberOfLines={5} style={{fontSize:10,paddingHorizontal:15,color:'#888'}}>
                            {this.state.tempdetails} 
                        </Text>
                        <TouchableOpacity onPress={()=>{
                          this.props.navigation.navigate('Post',this.props.item)}
                          } style={{alignItems:'flex-end',marginEnd:10,paddingHorizontal:15}}>
                        <Text style={{fontSize:12,color:'blue'}}> Read more </Text>
                    </TouchableOpacity>

                    </View>
                  <View style={{padding:4,marginTop:-15,marginLeft:15}}>
                  <Text style={{fontSize:10,color:'#555'}}>{moment(this.props.item.date).format("MMMM D, YYYY")}</Text>
                  </View>

            </Card>  
        </View>
 
    );
	}

}