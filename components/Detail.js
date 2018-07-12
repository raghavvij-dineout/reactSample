import React,{Component}  from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NavigationBar from './NavigationBar';
class DetailScreen extends Component {
    render() {
        var stateParams = this.props.navigation.state.params;
        var data = stateParams.selectedItemData;
        var shouldShowBackButton = stateParams.shouldShowBackButton;
        return (
            <View>
                <NavigationBar name = "Detail Screen" subTitle="This is the detail screen" shouldShowBackButton = {shouldShowBackButton} navigation = {this.props.navigation}/>
                <Text>{data.name}</Text>
            </View>
        );
    }
}

export default DetailScreen;