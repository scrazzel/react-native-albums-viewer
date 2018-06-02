/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import LoginForm from './src/components/LoginForm';
import firebase from 'firebase';
import Header from './src/components/Header';
import LogoutButton from './src/components/LogoutButton';
import AlbumList from './src/components/AlbumList';
import AlbumDetails from './src/components/AlbumDetails';
import { StackNavigator } from 'react-navigation';







const screens = StackNavigator({
  home: {
    screen: "App",
    navigationOptions:{
      title: "Ekran główny"
    }
  },
  albumDetails: {
    screen: "AlbumDetails",
    navigationOptions:{
      title: "Szczegóły albumu"
    }
  }
});









export default class App extends Component {

  state = { loggedIn: null };

  componentWillMount(){
    firebase.initializeApp({
        apiKey: "AIzaSyDsYn7L7qlngJnrYMxDOCp4n7zHJK-jRmw",
        authDomain: "albumsviewer.firebaseapp.com",
        databaseURL: "https://albumsviewer.firebaseio.com",
        projectId: "albumsviewer",
        storageBucket: "albumsviewer.appspot.com",
        messagingSenderId: "897404904381"
      });

      // jezeli sie zaloguje => istnieje obiekt user
      // jezeli sie wyloguje => nie ma obiektu user
    firebase.auth().onAuthStateChanged((user) => {
        if (user){
            this.setState({loggedIn: true});
        }
        else {
            this.setState({loggedIn: false});
        }
        
    })
}

  renderMainPage(){
    switch(this.state.loggedIn){
      case true:
          return(
            <View>
            <Header headerText="Nagłóweczek" />
            <LogoutButton />
            <AlbumList />
          </View>
          );

      case false:
          return (<LoginForm />);

      default:
          return (            
            <View style={styles.spinner}>
              <ActivityIndicator size='large' style={styles.spinner} />
            </View>
        );
    }
  }

  renderAlbumDetails(){
    
  }


  render() {
    return (
      <View style={styles.container}>
        {this.renderMainPage()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
