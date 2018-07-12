import React,{Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import LotsOfGreeting from './Greeting';
import NavigationBar from './NavigationBar';
import UsersList from './UsersList';
export default class HelloWorld extends Component {

    _onPress = (item,data) => {
        console.log(this.props);
    };

    render() {
        var testData = 
        [{
            "name":"Raghav Vij",
            "key":"0",
        },
        {
            "name":"Vijayta Bhandari",
            "key":"1",
        },
        {
            "name":"ABC DEF",
            "key":"2",
        },
        {
            "name":"fdsaf Vij",
            "key":"3",
        },
        {
            "name":"Ragfasdfhav Vij",
            "key":"4",
        },
        {
            "name":"fas Vij",
            "key":"5",
        }];
        return (
            <View style={styles.container}>
                <NavigationBar name = "Welcome" subTitle = "Below is a list of users" shouldShowBackButton = "false"/>
                <UsersList data={testData} navigation={this.props.navigation}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  });