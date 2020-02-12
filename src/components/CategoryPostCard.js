import React,{ Component ,PropType } from 'react';
import {FlatList,AppRegistry,ImageBackground,View,ScrollView,Image, Dimensions, TouchableOpacity,} from 'react-native';
import {Header,Title,Card,CardItem,Text,Left,Right,Button,Body,Container,Icon, Row} from 'native-base';
import moment from "moment";
import LinearGradient from 'react-native-linear-gradient';

export default class CategoryPostCard extends Component{

    constructor(props) {
		super(props);
		this.state={

    }
    }
    componentDidMount(){
      var tempdetails= this.props.item.excerpt.rendered;
      
      while(
        tempdetails.includes("&nbsp;")  || tempdetails.includes("<p>") ||
        tempdetails.includes("&#038;") ||  tempdetails.includes("</p>") ||
        tempdetails.includes("[&hellip;]") || tempdetails.includes ("&#8211;") ||
        tempdetails.includes("&#8220;") ||  tempdetails.includes("&#8221;") ||
        tempdetails.includes("&#8216;") || tempdetails.includes("&#8217;")   
        || tempdetails.includes("&#8230;")        
        ){
        tempdetails = tempdetails.replace("&nbsp;", " ");
        tempdetails = tempdetails.replace("<p>", "");
        tempdetails = tempdetails.replace("&#038;", "&");
        tempdetails = tempdetails.replace("</p>", "");
        tempdetails = tempdetails.replace("[&hellip;]", "");
        tempdetails = tempdetails.replace("&#8211;", "-");
       tempdetails = tempdetails.replace("&#8220;", "\"");
        tempdetails = tempdetails.replace("&#8221;", "\"");
        tempdetails = tempdetails.replace("&#8216;", "\'");
        tempdetails = tempdetails.replace("&#8217;", "\'");
       tempdetails = tempdetails.replace("&#8230;", "...");
       }
   
       
      var title= this.props.item.title.rendered;
      while(
        title.includes("&nbsp;")  || title.includes("<p>") ||
        title.includes("&#038;") ||  title.includes("</p>") ||
        title.includes("[&hellip;]") || title.includes ("&#8211;") ||
        title.includes("&#8220;") ||  title.includes("&#8221;") ||
        title.includes("&#8216;") || title.includes("&#8217;")   
        || title.includes("&#8230;")        
        ){
        title = title.replace("&nbsp;", " ");
        title = title.replace("<p>", "");
        title = title.replace("&#038;", "&");
        title = title.replace("</p>", "");
        title = title.replace("[&hellip;]", "");
        title = title.replace("&#8211;", "-");
        title = title.replace("&#8220;", "\"");
        title = title.replace("&#8221;", "\"");
        title = title.replace("&#8216;", "\'");
        title = title.replace("&#8217;", "\'");
        title = title.replace("&#8230;", "...");
       }
      this.setState({
        title,
        tempdetails,
      })
    }


	render(){
   

    return(
        <View key = {this.props.item.id} style={{flex:1,width:'97%',alignContent:'center',alignSelf:'center',borderRadius:10,paddingBottom:5}}>
            <Card key = {this.props.item.id} style={{borderRadius:10,paddingBottom:5}}>
                
                   
                      <Image style={{width:'100%',height:150,borderTopLeftRadius:10,borderTopRightRadius:10}} source={{uri: this.props.item._embedded['wp:featuredmedia'][0].source_url }} />
                  
                   <LinearGradient
								colors={['rgba(0,0,0,0.3)', 'transparent','rgba(0,0,0,0.5)']}
								style={{borderTopLeftRadius:10,borderTopRightRadius:10,
									position: 'absolute',
									left: 0,
									right: 0,
									top: 0,
									height: 150,
								}}
								/>
                  <View style={{flexDirection:'row',flex:1,paddingLeft:10}}>
                     <Text style={{fontSize:18,flex:8,fontFamily:'Montserrat-Bold',fontWeight:'900'}}>{this.state.title}</Text>
                     {/* <TouchableOpacity  style={{alignItems:'flex-end',}} onPress={this._onPressButton}>
                        <Icon name="heart"></Icon>
                    </TouchableOpacity> */}
                  </View>  
                
                    <View style={{paddingHorizontal:10}}>
                        <Text numberOfLines={5} style={{fontSize:12,fontWeight:"400",fontFamily:'Montserrat-Bold',color:'#888'}}>
                            {this.state.tempdetails} 
                        </Text>
                        <View style={{flexDirection:'row-reverse',justifyContent:'space-between',paddingTop:5}}>
                            <TouchableOpacity onPress={()=>{
                              this.props.navigation.navigate('Post',this.props.item)}
                              } style={{alignItems:'flex-end',}}>
                            <Text style={{fontSize:10,color:'blue',alignSelf:'flex-end',fontFamily:'Montserrat-Bold'}}> Read more </Text>
                          </TouchableOpacity>

                          <Text style={{fontSize:10,color:'#555',alignSelf:'flex-start',fontFamily:'Montserrat-Bold'}}>
                            {moment(this.props.item.date).format("MMMM D, YYYY")}
                            </Text>
                          
                        </View>
                      </View>
            </Card>  
        </View>
 
    );
	}

}