import React, {Component, PropType} from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';

import {Icon, Header} from 'native-base';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import 'react-native-gesture-handler';

import HomeScreen from '../Home/HomeScreen';
import FavouriteScreen from '../Favourite/FavouriteScreen';
import AcademicCalenderScreen from '../StaticScreens/AcademicCalenderScreen';
import SplashScreen from '../StaticScreens/SplashScreen';
import GalleryScreen from '../Gallery/GalleryScreen';
import AboutUsScreen from '../StaticScreens/AboutUsScreen';
import MeetOurTeamScreen from '../MeetOurTeam/MeetOurTeamScreen';
import ContactUsScreen from '../StaticScreens/ContactUsScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

import HomeStackNavigator from './HomeStackNavigator';
import MeetOurTeamNav from './MeetOurTeamNav';
import CopyrightsScreen from '../StaticScreens/CopyrightsScreen';

const CustomDrawerComponent = props => (
  <SafeAreaView style={{flex: 1}}>
        

        <View style={{flex:1,flexDirection:'column',alignItems:'center',alignSelf:'center',justifyContent:'center'}} >
        {/* <Image style={{flex:1}}
                     source={require('../../assets/images/The_8th_Volume2.jpg')} /> */}
                      <Text 
                      style={{fontFamily:'Montserrat-Bold',fontWeight:'900',fontSize:24}}>
                        The_8th_Volume</Text>
                  <TouchableOpacity onPress={
                    ()=>{
                        props.navigation.navigate('The8ThVolume');
                      }
                   }  >
                    <Text style={{fontSize: 20,color:'000'}}>Know More</Text>
                  </TouchableOpacity>
        </View>

  
        <View  style={{flex:2}}>
          <ScrollView style={{flex:3,}}>
            <DrawerItems {...props} />
          </ScrollView>
        </View>
  
   
  </SafeAreaView>
);

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeStackNavigator,
      navigationOptions:{
        drawerIcon: ({tintColor}) => (
          <Icon  name='home' tintColor={tintColor} />
        
        ),

      }
      // navigation options in rootstack navigator
    },
    Favourite: {
      screen: FavouriteScreen,
      navigationOptions: {
        drawerLabel: 'Favourite',
        drawerIcon: ({tintColor}) => (
          <Icon type="MaterialIcons" name='favorite' tintColor={tintColor} />
        ),
      },
    },
    AcademicCalender: {
      screen: AcademicCalenderScreen,
      navigationOptions: {
        drawerLabel: 'AcademicCalender',
        drawerIcon: ({tintColor}) => (
          <Icon type="MaterialIcons" name='today' tintColor={tintColor} />
        )
      },
    },
    AboutUs: {
      screen: AboutUsScreen,
      navigationOptions: {
        drawerLabel: 'AboutUs',
        drawerIcon: ({tintColor}) => (
          <Icon type="MaterialCommunityIcons" name='account-badge' tintColor={tintColor} />
          
        )
      },
    },
    MeetOurTeam: {
      screen: MeetOurTeamNav,
      navigationOptions: {
        drawerLabel: 'MeetOurTeam',
        drawerIcon: ({tintColor}) => (
          <Icon type="MaterialIcons" name='people' tintColor={tintColor} />
        )
      },
    },
    ContactUs: {
      screen: ContactUsScreen,
      navigationOptions: {
        drawerLabel: 'ContactUs',
        drawerIcon: ({tintColor}) => (
          <Icon type="MaterialIcons" name='send' tintColor={tintColor} />
        )
      },
    },
    Copyrights:{
      screen: CopyrightsScreen,
      navigationOptions: {
        drawerLabel: 'Copyrights',
        drawerIcon: ({tintColor}) => (
          <Icon  name='copy' tintColor={tintColor} />
        )
      },
    }
  },
  {
    initialRouteName: 'Home',
    contentComponent: CustomDrawerComponent,
  },
);

const AppDrawerNav = createAppContainer(MyDrawerNavigator);

export default AppDrawerNav;
