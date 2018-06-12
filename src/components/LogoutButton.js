import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const LogoutButton = (props) => {

    const firebase = require('firebase');

    return(
        <TouchableOpacity style={styles.buttonContainer} onPress={() => 
            firebase.auth()
            .signOut()
            /*.then(() => Alert.alert('Wylogowales sie!'))*/}>
            <Text>
                {props.test}
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