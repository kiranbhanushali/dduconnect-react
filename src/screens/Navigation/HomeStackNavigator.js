import React,{ Component ,PropType } from 'react';
import {FlatList,ImageBackground,View,ScrollView,Image, Dimensions,} from 'react-native';
import {Header,Separator,Title,Card,Text,Left,Right,Button,Body,Container,Icon, Row} from 'native-base';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PostScreen from '../Post/PostScreen';
import HomeScreen from '../Home/HomeScreen';
import PostByCategoryScreen from '../Post/PostByCategoryScreen';
import CategoryPostCard from '../../components/CategoryPostCard';
import PastYearPapers from '../StaticScreens/PastYearPapers';
const HomeStackNavigator = createStackNavigator({
	Home: {
        screen: HomeScreen,        
    },
    Post:{
        screen: PostScreen,
    },
    PostByCategory:{
        screen: PostByCategoryScreen,
    },
    CategoryPostCard:{
        screen: CategoryPostCard,
    },
    PastYearPapers:{
        screen:PastYearPapers,
    }

},
{
    initialRouteName:'Home',
    header:null,
}
);

export default createAppContainer(HomeStackNavigator);