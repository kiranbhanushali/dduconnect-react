import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from '../StaticScreens/SplashScreen'
import Main from '../Main'
import IntroScreen from '../StaticScreens/IntroScreen'
import HomeScreen from '../Home/HomeScreen'
const RootStackNavigator = createStackNavigator({
	Splash: {
		screen: SplashScreen,
		navigationOptions: {
		header: null
		}
	},
	Main: {
		screen: Main,
		navigationOptions: {
		header: null
		}
	},Home:{
		screen: HomeScreen,
		navigationOptions: {
			drawerLabel: 'Home',
			title:'Home',
		}
	},
	Intro:{
		screen: IntroScreen,
		navigationOptions: {
		header: null
		}
	}
},
{
	initialRouteName:'Splash',
}
);

export default createAppContainer(RootStackNavigator);