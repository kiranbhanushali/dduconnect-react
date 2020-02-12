import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer } from "react-navigation"
import MeetOurTeamScreen from '../MeetOurTeam/MeetOurTeamScreen';
import MembersScreen from '../MeetOurTeam/MembersScreen';

import React  , { Component ,PropType } from 'react';
import { View ,Text ,Button,TouchableOpacity} from 'react-native';
import { Body ,Icon } from 'native-base';

const MeetOurTeamNav = createStackNavigator({
	MeetOurTeam:{
        screen:MeetOurTeamScreen,
       
    },
    Members:{
        screen:MembersScreen,
    }
},
{
    initialRouteName:'MeetOurTeam',
    navigationOptions: {
        header: ({ goBack }) => ({
            left: ( <Icon name={'arrow'} onPress={ () => { goBack() } }  /> ),  
        }),
  
        }
}
);

export default createAppContainer(MeetOurTeamNav);