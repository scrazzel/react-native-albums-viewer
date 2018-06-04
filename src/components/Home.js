import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import firebase from 'firebase';
import Header from './Header';
import LogoutButton from './LogoutButton';
import AlbumList from './AlbumList';
import ALbumDetails from './AlbumDetails';
import LoginForm from './LoginForm';
import { StackNavigator } from 'react-navigation';

export default class Home extends Component {


  state = { loggedIn: null };

  static navigationOptions = {
    title: 'Nagłóweczek',
    headerTitleStyle: { 
      textAlign:"center", 
      flex:1 
  }
};
/*

  ifShowHeader(){
    if (this.state.loggedIn == null) headerVisibility = null;
    else headerVisibility = '';
  }
*/
/*
static navigationOptions = {
  header: null
};
*/

  goToDetails(){
     this.props.navigation.navigate('ALbumDetails');
  }

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
  var { navigate } = this.props.navigation;

  switch(this.state.loggedIn){
    case true:
        return(
          <View>
            <LogoutButton />
            <AlbumList navigate={navigate}/>
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
    /* .. */
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