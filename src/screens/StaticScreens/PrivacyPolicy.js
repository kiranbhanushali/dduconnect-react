import React  , { Component ,PropType } from 'react';
import { View ,StyleSheet,Dimensions, TouchableHighlight, RefreshControl, ScrollView} from 'react-native';
import Pdf from 'react-native-pdf';
import { Button, Icon,Text } from 'native-base';
import { Header } from 'react-native-elements';
import NetInfo from "@react-native-community/netinfo";

export default class PrivacyPolicy extends Component{

	constructor(properties) {
		super(properties);
		this.state ={ refreshing: false, isConnected: true}
		
		this.timer = setInterval(()=> this.getConnectionStatus(), 1000)
	  }
			
		getConnectionStatus(){
			NetInfo.fetch().then(state => {
				if ( this.state.isConnected != state.isConnected )
				{
					this.setState({isConnected : state.isConnected})
				// this.state.isConnected = state.isConnected;
					// console.log(this.state.isConnected);
				}
			});
		}
		onRefresh = () => {
			this.setState({refreshing: true});
			this.setState({refreshing: false });
		};

	render(){
		
		var source =  {uri:'https://kiranbhanushali.github.io/DDUConnectDatabase/privacypolicy.pdf',cache:false};
		

		return (
			<View style={styles.container}>
				 <Header backgroundColor='fff' >
          <Button transparent onPress={this.props.navigation.toggleDrawer}>
            <Icon name='menu' />
          </Button>
          <Text style={{fontFamily:'Montserrat-Bold',fontWeight:'900'}}>Privacy Policy </Text>
          </Header> 
		  <TouchableHighlight style={{width:'100%'}}>
              <View style={{backgroundColor:"red"}}>
                { 
                  this.state.isConnected ? null : <Text style={{alignSelf: "center", color: "white"}}>
                    No Internet Connection
                  </Text>
                }
              </View>
            </TouchableHighlight>
				
			<ScrollView style={styles.scrollView}

				contentContainerStyle={{ flex: 1 }}
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this.onRefresh}
                />
				}
            >
			
			<Pdf
				source={source}
				onLoadComplete={(numberOfPages,filePath)=>{
					// console.log(`number of pages: ${numberOfPages}`);
				}}
				onPageChanged={(page,numberOfPages)=>{
					// console.log(`current page: ${page}`);
				}}
				onError={(error)=>{
					console.log(error);
				}}
				onPressLink={(uri)=>{
					console.log(`Link presse: ${uri}`)
				}}
				style={styles.pdf}/>
				</ScrollView>
		</View>
		);
		
	}

}

const styles = StyleSheet.create({
    container: {
		flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop:-20,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});
