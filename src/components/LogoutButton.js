import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, ToastAndroid } from 'react-native';
 

const LogoutButton = (props) => {

    const firebase = require('firebase');

    return(
        <TouchableOpacity style={styles.buttonContainer} onPress={() => {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    firebase.auth().signOut();

                    ToastAndroid.show('Wylogowano pomyślnie!', ToastAndroid.SHORT);
                }
             });
        }}>
            <Text>
                {props.logoutIcon}
            </Text>  
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 2,
        marginRight: 15
    }
});

export default LogoutButton;