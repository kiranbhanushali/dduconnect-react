import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer } from "react-navigation"
import AcademicCalenderScreen from '../StaticScreens/AcademicCalenderScreen';
import AcademicCalenderChoose from '../StaticScreens/AcademicCalenderChoose';
const AcademicCalenderNav = createStackNavigator({

	AcademicCalenderChoose:{
		screen: AcademicCalenderChoose,
		navigationOptions: {
		header: null
		}
    },
    AcademicCalender: {
		screen: AcademicCalenderScreen,
		navigationOptions: {
		header: null
		}
	},
},
{
	initialRouteName:'AcademicCalenderChoose',
}
);

export default createAppContainer(AcademicCalenderNav);