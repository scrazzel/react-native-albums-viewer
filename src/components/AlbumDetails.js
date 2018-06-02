import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class AlbumDetails extends Component {
    static navigationOptions = {
        title: "Strona szczegolow"
      };
    
    render(){
        return(
            <View>
                <Text>
                    Dziala XD
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});