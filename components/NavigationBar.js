import React,{Component} from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';

class NavigationBar extends Component {
    _onPress = () => {
        this.props.navigation.pop();
    }
    render() {
        return(
                <View style = {styles.innerContainer}>
                    {this.props.shouldShowBackButton == "true" &&
                        <TouchableOpacity style = {styles.backContainer} onPress = {this._onPress.bind()}>
                                <Text style={styles.back}>Back</Text>
                        </TouchableOpacity>
                    }
                    <Text style={styles.title}>{this.props.name}</Text>
                    <Text style={styles.subTitle}>{this.props.subTitle}</Text>
                </View>
        );
    }
}

const styles = StyleSheet.create({
        innerContainer: 
        {
           justifyContent:'center', 
           alignItems:'center',
           height:80,
           alignSelf:'stretch',
           backgroundColor:'rgb(0,0,0)',
        },
        title: {
            color:'#ffffff',
            fontFamily:'Cochin',
            fontWeight:'bold',
            fontSize:24,
        },
        subTitle: {
            color:'#ffffff',
            fontFamily:'Cochin',
            fontWeight:'normal',
            fontSize:16,
        },
        backContainer:{
            position:'absolute',
            start:15,
            paddingVertical:15,
            width:60,
        },
        back:{
            color:'rgb(255,255,255)',
            fontFamily:'Cochin',
            fontWeight:'normal',
            fontSize:18,
        },
});

export default NavigationBar;