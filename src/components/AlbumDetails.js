import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import LogoutButton from './LogoutButton';

export default class AlbumDetails extends Component {

    static navigationOptions = {
        title: 'Informacje o albumie',
        headerTitleStyle: { 
          flex:1,
        },
      };
 
    render(){
        console.log("details logi");
        var { params } = this.props.navigation.state;
        console.log(params);
        return(
            <ScrollView style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.containerLight}>
                        <View>
                            <Text style={[styles.headerTextLight, styles.boldText]}>
                                Tytuł:
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.headerTextLight}>
                                {params.title}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.containerDark}>
                        <View>
                            <Text style={[styles.headerTextDark, styles.boldText]}>
                                Wykonawca:
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.headerTextDark}>
                                {params.band}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.containerLight}>
                        <View>
                            <Text style={[styles.headerTextLight, styles.boldText]}>
                                Gatunek:
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.headerTextLight}>
                                {params.genre}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.containerDark}>
                        <View>
                            <Text style={[styles.headerTextDark, styles.boldText]}>
                                Rok wydania:
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.headerTextDark}>
                                {params.publicationDate}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.containerLight}>
                        <View>
                            <Text style={[styles.headerTextLight, styles.boldText]}>
                                Cena:
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.headerTextLight}>
                                {params.price} zł
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 17
    },
    headerContainer:{
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextLight:{
        fontSize: 18,
        paddingVertical: 10,
        paddingHorizontal: 10,
        color: '#000000',
        textAlign:'center'
    },
    headerTextDark:{
        fontSize: 18,
        paddingVertical: 10,
        paddingHorizontal: 10,
        color: '#000000',
        textAlign:'center'
    },
    boldText:{
        fontWeight: 'bold'
    },
    containerLight:{
        backgroundColor: '#ffffff'
    },
    containerDark:{
        backgroundColor: '#eceff4'
    }
});