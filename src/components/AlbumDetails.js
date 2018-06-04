import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class AlbumDetails extends Component {
    static navigationOptions = {
        title: 'Szczegóły albumu',
        headerTitleStyle: { 
          flex:1 
      }
      };
    
    render(){
        console.log("details logi");
        var { params } = this.props.navigation.state;
        return(
            <View>
                <Text>
                    {params.title}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});