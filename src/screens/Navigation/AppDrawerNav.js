import React  , { Component ,PropType } from 'react';
import { View ,Text ,Button,SafeAreaView,Image,ScrollView}
 		from 'react-native';
import { createDrawerNavigator , DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
 import 'react-native-gesture-handler'


import HomeScreen from '../Home/HomeScreen';
import FavouriteScreen from '../Favourite/FavouriteScreen'
import AcademicCalenderScreen from '../StaticScreens/AcademicCalenderScreen';
import SplashScreen from '../StaticScreens/SplashScreen';
import GalleryScreen from '../Gallery/GalleryScreen';
import AboutUsScreen from '../StaticScreens/AboutUsScreen';
import MeetOurTeamScreen from '../MeetOurTeam/MeetOurTeamScreen';
import ContactUsScreen from '../StaticScreens/ContactUsScreen';



const CustomDrawerComponent = (props) => (
      <SafeAreaView style = {{flex:1}} >
      <View style={{flex:1}}>
        <Text style ={{ fontSize:30,alignContent:'center'}}>Volume 8 </Text>
        <Button style ={{ marginLeft:30,height:15,width:'30%' }} title = "Know More" />
      </View>
      
      <ScrollView>
        <DrawerItems {...props} />
        </ScrollView>
      </SafeAreaView>

  )

  const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
    // navigation options in rootstack navigator
  },
  Favourite:{
    screen:FavouriteScreen,
    navigationOptions : {
      drawerLabel: 'Favourite',
      
    }
  },
  AcademicCalender:{
    screen: AcademicCalenderScreen,
    navigationOptions : {
      drawerLabel: 'AcademicCalender',
      
    }
  },
   Gallery:{
    screen: GalleryScreen,
    navigationOptions : {
      drawerLabel: 'Gallery',
      
    }
  },
   AboutUs:{
  	screen: AboutUsScreen,
    navigationOptions:{
      drawerLabel: 'AboutUs',
    }
  },
   MeetOurTeam:{
    screen: MeetOurTeamScreen,
    navigationOptions : {
      drawerLabel: 'MeetOurTeam',
      
    }
  },
   ContactUs:{
    screen: ContactUsScreen,
    navigationOptions : {
      drawerLabel: 'ContactUs',
      
    }
  },
  
   
},{
  initialRouteName: 'Home',
  contentComponent : CustomDrawerComponent
});

 const AppDrawerNav = createAppContainer(MyDrawerNavigator);

export default AppDrawerNav;
