import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
    return(
        <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>
                {props.headerText}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle:{
        backgroundColor: '#dddddd',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 10,
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.2,
        elevation: 10,
    },
    textStyle:{
        fontSize: 20,
        color: '#000000'
    }
});

export default Header;

