import React,{Component} from 'react';
import {View, Text} from 'react-native';

class Greeting extends Component {
    render() {
        return(
            <View>
                <Text>Hi {this.props.name}!</Text>
            </View>
        );
    }
}

export default class LotsOfGreetings extends Component {
    render() {
        return (
            <View>
                <Greeting name = 'Raghav' />
                <Greeting name = 'Vijayta' />
            </View>
        );
    }
}