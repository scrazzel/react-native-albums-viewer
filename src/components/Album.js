import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import LogoutButton from './LogoutButton';
import DetailsButton from './DetailsButton';

const Album = (props) => {
    return(
        <View style={styles.container}>
            <View  style={styles.section}>
                <View style={styles.bandLogoContainer}>
                    <Image style={styles.bandLogo} source={{uri: props.bandLogo}} />
                </View>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>{props.title}</Text>
                    <Text>{props.band}</Text>
                </View>
            </View>

            <View style={styles.section}>
                <Image style={styles.albumImage} source={{uri: props.albumCover}} />
            </View>

            <View style={styles.section}>
                <DetailsButton  navigate={props.navigate} band={props.band} title={props.title} price={props.price} genre={props.genre} publicationDate={props.publicationDate} 
                    songs={props.songs} bandLogo={props.bandLogo} albumCover={props.albumCover}/>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
    section: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    },
    bandLogoContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    bandLogo: {
        height: 50,
        width: 50
    },
    headerContainer:{
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerText:{
        fontSize: 18
    },
    albumImage: {
        height: 300,
        flex: 1,
        width: null
    },
});

export default Album;