import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import LogoutButton from './LogoutButton';

export default class AlbumDetails extends Component {

    static navigationOptions = {
        title: 'Informacje o albumie',
        headerTitleStyle: { 
          flex:1,
          marginLeft: 55
        },
      };
 
    render(){
        console.log("details logi");
        var { params } = this.props.navigation.state;
        console.log(params);
        return(
            <ScrollView style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTextLight}>
                        <Text style={styles.boldText}>Tytuł: </Text>{params.title}
                    </Text>
                    <Text style={styles.headerTextDark}>
                        <Text style={styles.boldText}>Wykonawca: </Text>{params.band}
                    </Text>
                    <Text style={styles.headerTextLight}>
                        <Text style={styles.boldText}>Gatunek: </Text>{params.genre}
                    </Text>
                    <Text style={styles.headerTextDark}>
                        <Text style={styles.boldText}>Rok wydania: </Text>{params.publicationDate}
                    </Text>
                    <Text style={styles.headerTextLight}>
                        <Text style={styles.boldText}>Cena: </Text>{params.price} zł
                    </Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
    headerContainer:{
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextLight:{
        fontSize: 18,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#ffffff',
        color: '#000000',
        textAlign:'center'
    },
    headerTextDark:{
        fontSize: 18,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#eceff4',
        color: '#000000',
        textAlign:'center'
    },
    boldText:{
        fontWeight: 'bold'
    }
});