import React,{Component} from 'react';
import {Text,View,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import {push} from 'react-navigation';
class UsersList extends Component {
    _onPress = (data,item) => {
        console.log(data);
        this.props.navigation.navigate('Detail',{selectedItemData:data,shouldShowBackButton:"true"});
    };


   render() {
       return(
            <View style={styles.list}>
                <FlatList data={this.props.data} keyExtractor={(item, index) => item.key} renderItem={({item}) => 
                <TouchableOpacity onPress={this._onPress.bind(this,item)}>
                    <View>
                        <Text style={styles.item}>{item.name}</Text>
                        <View style={styles.separator}></View>
                    </View>
                </TouchableOpacity>
                }
                />
            </View>    
       );
   } 
}

const styles = StyleSheet.create(
    {
        list: {
            flex:1,
        },
        item:{
            color:'rgb(0,0,0)',
            backgroundColor:'white',
            paddingLeft:10,
            paddingBottom:10,
            paddingTop:10,
        },
        separator:{
            height:1,
            backgroundColor:'rgb(0,0,0)',
            paddingBottom:0,
            start:10,
            end:10,
        }
    }
)

export default UsersList;