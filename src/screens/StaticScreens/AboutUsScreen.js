import React,{ Component ,PropType } from 'react';
import {FlatList,ImageBackground,View,ScrollView,Image,StyleSheet, Dimensions,ActivityIndicator} from 'react-native';
import { WebView } from 'react-native-webview';
import {Header,Title,Card,Text,Left,Right,Button,Body,Container,Icon, Row} from 'native-base';
import YouTube from 'react-native-youtube';
import Video from 'react-native-video';



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
          <View style={{flex:1,margin:20}}>

<Video source={{uri: "https://youtu.be/U7tmi02ctgY"}}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}                                      // Store reference
       onBuffer={this.onBuffer}                // Callback when remote video is buffering
       onError={this.videoError}               // Callback when video cannot be loaded
       style={styles.backgroundVideo} />
               {/* <YouTube
                  aa="AIzaSyDr 
                  4ppgGNpCoovzcG8MHDeyqv85K5pHWbU"
            videoId="U7tmi02ctgY" // The YouTube video ID
            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={e => this.setState({ error: e.error })}
            style={{ position: 'absolute',
            right: 10,
            top: 40,
            flexDirection: "row",
            height: 300,
            width:300,
            padding: 10}}
          /> */}
        
          </View>
        
        
    );  
}

}


var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});