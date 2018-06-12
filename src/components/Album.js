import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import LogoutButton from './LogoutButton';

const Album = (props) => {
    return(
        <TouchableOpacity onPress={() => props.navigate("AlbumDetails", {band:props.band, title:props.title, price:props.price, genre:props.genre, publicationDate:props.publicationDate, 
            bandLogo:props.bandLogo, albumCover:props.albumCover})}>
            <View style={styles.container}>
                <View style={styles.section}>
                    <View style={styles.bandLogoContainer}>
                        <Image style={styles.bandLogo} source={{uri: props.bandLogo}} />
                    </View>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>{props.title}</Text>
                        <Text style={styles.bandText}>{props.band}</Text>
                    </View>
                </View>

                <View style={[styles.section, styles.paddingTop]}>
                    <Image style={styles.albumImage} source={{uri: props.albumCover}} />
                </View>
            </View>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    container: {
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
    section: {
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    },
    bandLogoContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    bandLogo: {
        height: 80,
        width: 80,
        flex: 1,
        resizeMode: 'contain'
    },
    headerContainer:{
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000'
    },
    bandText:{
        color: '#000000'
    },
    albumImage: {
        height: 300,
        flex: 1,
        width: null,
        resizeMode: 'stretch'
    },
    paddingTop:{
        paddingTop: 10
    }
});

export default Album;