import React,{ Component ,PropType } from 'react';
import {FlatList,ImageBackground,View,ScrollView,Image,StyleSheet, Dimensions,ActivityIndicator} from 'react-native';
import { WebView } from 'react-native-webview';
import {Header,Title,Card,Text,Left,Right,Button,Body,Container,Icon, Row} from 'native-base';
import YouTube from 'react-native-youtube';



export default class AboutUsScreen extends Component{
    static navigationOptions = ({navigation}) =>{
		return {
			headerTitle: <Header> AboutUs </Header>,
		}

	}
    constructor(props) {
        super(props);
        this.state = { visible: true };
    }
     
    hideSpinner() {
        this.setState({ visible: false });
    }
    
	render(){
     console.log(this.state);
     
    return(
    
      <YouTube
      apiKey="AIzaSyDr4ppgGNpCoovzcG8MHDeyqv85K5pHWbU"
videoId="U7tmi02ctgY" // The YouTube video ID
onReady={e => this.setState({ isReady: true })}
onChangeState={e => this.setState({ status: e.state })}
onChangeQuality={e => this.setState({ quality: e.quality })}
onError={e => this.setState({ error: e.error })}
style={{height:250,width:'90%'}}
/>
        
        
    );  
}

}

const styles = StyleSheet.create({
    stylOld: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    styleNew: {
      flex: 1,
    },
    WebViewStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      marginTop: 40,
    },
    ActivityIndicatorStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
    },
  });