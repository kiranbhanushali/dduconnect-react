import React  , { Component ,PropType } from 'react';
import CardPost from  '../../components/CardPost'
import {FlatList} from 'react-native';
import {Header,Title,Text,Left,Right,Button,Body,Container,Icon} from 'native-base';


export default class HomeScreen extends Component{

	
	render(){
		return(
			<Container>
				<Header>
					<Left>
						<Button transparent onPress={this.props.navigation.toggleDrawer()}>
							<Icon name='menu' />
						</Button>
					</Left>
					<Body>
						<Title>Home</Title>
					</Body>
					<Right>
						<Button transparent>
							<Icon name='menu' />
						</Button>
					</Right>
				</Header>
				
				</Container>
		);
	}

}
