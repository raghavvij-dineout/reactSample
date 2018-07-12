import {createStackNavigator} from 'react-navigation';
import HelloWorld from './HelloWorld';
import DetailScreen from './Detail';
const RootStack = createStackNavigator(
    {
        Home: HelloWorld,
        Detail: DetailScreen,
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    });

export default RootStack;