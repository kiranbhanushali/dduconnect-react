import React  , { Component ,PropType } from 'react';
import { View ,StyleSheet,Dimensions, ScrollView, RefreshControl, TouchableHighlight} from 'react-native';
import Pdf from 'react-native-pdf';
import { Button, Icon,Text } from 'native-base';
import { Header } from 'react-native-elements';
import NetInfo from "@react-native-community/netinfo";

export default class AcademicCalenderScreen extends Component{

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
		const d = this.props.navigation.state.params.d;
		console.log(d);
		var source = ''
		if(d==1){
			source = {uri:'https://kiranbhanushali.github.io/DDUConnectDatabase/academiccalender_sem2.pdf',cache:true};
		}
		else{
			source = {uri:'https://kiranbhanushali.github.io/DDUConnectDatabase/academiccalender.pdf',cache:true};
		}

		return (
			<View style={styles.container}>
				 {/* <Header backgroundColor='fff' >
          <Button transparent onPress={this.props.navigation.toggleDrawer}>
            <Icon name='menu' />
          </Button>
          <Text style={{fontFamily:'Montserrat-Bold',fontWeight:'900'}}> Academic Calender </Text>
          </Header>   */}
		  	<ScrollView style={styles.scrollView}
				contentContainerStyle={{ flex: 1 }}
					refreshControl={
						<RefreshControl
						refreshing={this.state.refreshing}
						onRefresh={this.onRefresh}
						/>
				}
				>
				<TouchableHighlight>
				<View style={{backgroundColor:"red"}}>
					{ 
					this.state.isConnected ? null : <Text style={{alignSelf: "center", color: "white"}}>
						No Internet Connection
					</Text>
					}
				</View>
				</TouchableHighlight>
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
		
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});
