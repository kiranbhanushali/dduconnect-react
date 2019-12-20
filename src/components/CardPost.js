import React  , { Component ,PropType } from 'react';
import { View ,} from 'react-native';
import {Image} from 'react-native';
import { Container, Title, Content, Card,Body, CardItem, Text,} from 'native-base'

export default class CardPost extends Component{


	render(){
		return (
			<Card style={{	width:'46%',height:170}}>
				<CardItem>
					<Body>
						<Title>{this.props.title}</Title>
						
						<Text>{this.props.category}</Text>
					</Body>
				</CardItem>
			</Card>
		)
	}

}
