import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ActivityIndicator, ToastAndroid } from 'react-native';

class LoginForm extends Component {

    state = { email: '', password: '', loading: false };

    onButtonPress() {
        const email = this.state.email;
        const password = this.state.password;

        const firebase = require("firebase");

        this.setState({ loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
    }

    onLoginSuccess() {
        this.setState({ email: '', password: '', loading: false });
    }

    onLoginFail() {
        this.setState({ loading: false });
        ToastAndroid.show('Podano nieprawidłowe dane logowania!', ToastAndroid.SHORT);
    }

    renderButtonOrSpinner() {
        if (this.state.loading) {
            return (
                <View style={styles.spinner}>
                    <ActivityIndicator size='large' color='#03DAC6' style={styles.spinner} />
                </View>
            );
        }
        else {
            return (
                <TouchableOpacity style={styles.buttonContainer} onPress={this.onButtonPress.bind(this)}>
                    <Text style={styles.button}>
                        ZALOGUJ SIĘ
                    </Text>
                </TouchableOpacity>
            );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../images/loginIcon.png')}
                    />
                </View>
                <View style={styles.formContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email..."
                        placeholderTextColor='#dddddd'
                        underlineColorAndroid='rgba(0,0,0,0)'
                        onChangeText={(email) => this.setState({ email: email })}
                        value={this.state.email}
                        autoCorrect={false}
                        selectionColor='#03DAC6'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Hasło..."
                        placeholderTextColor='#dddddd'
                        underlineColorAndroid='rgba(0,0,0,0)'
                        autoCorrect={false}
                        onChangeText={(password) => this.setState({ password: password })}
                        value={this.state.password}
                        secureTextEntry
                        selectionColor='#03DAC6'
                    />
                    <View>
                        {this.renderButtonOrSpinner()}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#767676',
        justifyContent: 'center'

    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25
    },
    image: {
        width: 120,
        height: 120
    },
    formContainer: {

    },
    input: {
        height: 50,
        alignSelf: 'stretch',
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 25,
        marginLeft: 25,
        marginRight: 25,
        paddingLeft: 15,
        paddingRight: 15,
        color: '#ffffff',
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 18,
    },
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
    spinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default LoginForm;