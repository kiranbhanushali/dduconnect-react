import React,{ Component ,PropType } from 'react';
import {FlatList,ImageBackground,View,ScrollView,Image,StyleSheet, Dimensions,ActivityIndicator} from 'react-native';
import { WebView } from 'react-native-webview';
import {Title,Card,Text,Left,Right,Button,Body,Container,Icon, Row} from 'native-base';
import {Header} from 'react-native-elements'
import YouTube from 'react-native-youtube'

export default class AboutUsScreen extends Component{
  
    constructor(props) {
        super(props);
        this.state = { visible: true };
    }
     
    hideSpinner() {
        this.setState({ visible: false });
    }
    
	render(){
        
        const params = "https://dduconnect.in/about-us";
       // console.log(params);
    return(
    
        <View style={{ flex:1,justifyContent:'center',marginTop:-20}}>
        <Header backgroundColor='fff'>
          <Button transparent onPress={this.props.navigation.toggleDrawer}>
            <Icon name='menu' />
          </Button>
          <Text style={{fontFamily:'Montserrat-Bold',fontWeight:'900'}}> About Us </Text>
          </Header>  
          <WebView
            style={{ alignSelf: 'stretch', margin:15 }}
            source={{uri: 'https://www.youtube.com/embed/U7tmi02ctgY?rel=0&autoplay=1&showinfo=0&loop=1'}}
          />
          {/* <YouTube
            apiKey="AIzaSyCGu4PWX1orSkGgQwBGHbM5TNiEaDm61Ic"
            videoId="U7tmi02ctgY"
            play={true}
            fullscreen={false}
            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={e => this.setState({ error: e.error })}
            style={{ alignSelf: 'stretch', height: 300, marginHorizontal:30 }}
          /> */}
            <ScrollView style={{flex:1,padding:40}}>
              <Text style={{alignItems:"center",textAlign:"center",marginBottom:35, letterSpacing:1, lineHeight:20}}>
              DDU Connect began on 17th March, 2012 with an aim to ‘Connect’ various departments of Dharmsinh Desai University and showcasing the hidden creativity of its students. The journey began with a 16 page tabloid whose tagline was “By the students, for the students”. DDU Connect contains all the latest happenings of various departments of the university. It also contains the latest placement statistics and interviews of various eminent personalities across the country and alumni of the university. DDU Connect has grown exponentially since its launch. It held a Photography exhibition and played an active part in the University Foundation Day event, which witnessed a Guinness record being established. After evolving into a 20 page tabloid, Connect has now decided to adopt the noble idea of “GO GREEN”, under which it has become completely digital with “Inking Imaginations” as its tagline. Apart from all these, DDU Connect has also started to organize various events throughout the year. Connect with us to witness some of the University’s great moments and always stay updated about the institution.

              </Text>
            </ScrollView>

        </View>  
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