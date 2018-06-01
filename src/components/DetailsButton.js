import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import AlbumDetails from './AlbumDetails';

const DetailsButton = (props) => {
    return(
        <TouchableOpacity style={styles.buttonContainer} onPress={() => Alert.alert('dupa') }>
            <Text style={styles.button}>
                Szczegóły
            </Text>
        </TouchableOpacity>
    );
}

const renderComp = () => {
    return(<AlbumDetails />);
}


const renderAlbumSongs = ({songs}) => {
    console.log("SONGS => " + songs);
    var counter = 0;
    return songs.map(song => 
        <Text>
            {song}
        </Text>
    );
}

const renderAlbumDetails = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text>
                        {props.title}
                    </Text>
                </View>
                <View>
                    {props.band}
                </View>            
            </View>

            <View style={styles.albumImage}>
                <Image source={{uri: props.albumCover}}/>    
            </View>

            <View>
                <View>
                    <Text>
                        Utwory
                    </Text>
                </View>
                <View>
                    {renderAlbumSongs(props.props)}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#282828',
        paddingVertical: 10,
        marginLeft: 25,
        marginRight: 25,
        borderRadius: 5,
        flex: 1
    },
    button: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 18
    }
});

export default DetailsButton;