import React, {Component, PropType} from 'react';
import {View, ActivityIndicator,Image, ScrollView, TouchableHighlight, RefreshControl} from 'react-native';
import {
  Header,
  Title,
  Card,
  Text,
  Left,
  Right,
  Button,
  Body,
  Container,
  Icon,
  CardItem,
} from 'native-base';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import NetInfo from "@react-native-community/netinfo";

export default class MembersScreen extends Component {

  
  constructor(props) {
    super(props);
    this.state = {isLoading: true, refreshing: false, isConnected: true};
    global.mem = this.state.mem;
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

  componentDidMount() {
      this.setState({d:this.props.navigation.state.params})
    if (!this.state.mem) {
      return fetch(
        'https://kiranbhanushali.github.io/DDUConnectDatabase/meetourteamcur.json',
      )
        .then(response => response.json())
        .then(responseJson => {
          this.setState(
            {
              isLoading: false,
              nmem:responseJson[this.props.navigation.state.params.d],
            },
            function() {},
          );
        })
        .catch(error => {
          console.error(error);
        });
    }
    // console.log(this.props);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1,justifyContent:'center',alignSelf:'center'}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    // console.log(this.props.navigation.state.params)
 
    console.log(this.state.nmem);
    return (
      <Container>
        <View style={{flex: 1}}>
        <TouchableHighlight>
              <View style={{backgroundColor:"red"}}>
                { 
                  this.state.isConnected ? null : <Text style={{alignSelf: "center", color: "white"}}>
                    No Internet Connection
                  </Text>
                }
              </View>
            </TouchableHighlight>
          <ScrollView
            refreshControl={
              <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
              />
          }
          >
          
          <View style={{flex: 1,width:widthPercentageToDP('65%'),justifyContent:'center',alignSelf:'center'}}>
            {this.state.nmem.members.map((item, key) => (
              <Card style={{flex:1,alignItems:'center',padding:8}} key={key}>
                 <Image  	source={{	uri:item.image
											}} style={{width:100,height:100,borderRadius:100/2}}/>
                <Text style={{fontSize:14}}> {item.name}</Text>
                <Text style={{fontSize:7}}>{item.post}</Text>
                 
              </Card>
            ))}
          </View>
          </ScrollView>
        </View>
      </Container>
    );
  }
}
