import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const LogoutButton = () => {

    const firebase = require('firebase');

    return(
        <TouchableOpacity style={styles.buttonContainer} onPress={() => 
            firebase.auth()
            .signOut()
            .then(() => Alert.alert('Wylogowales sie!'))}>
            <Text style={styles.button}>
                Wyloguj się
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#282828',
        paddingVertical: 10,
        marginLeft: 25,
        marginRight: 25,
        borderRadius: 5
    },
    button: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 18
    },
});

export default LogoutButton;