import React, { Component } from 'react';
import { Text, View, ScrollView, ActivityIndicator, StyleSheet, Button } from 'react-native';
import firebase from 'firebase';
import Album from './Album';
import AlbumDetails from './AlbumDetails';


class AlbumList extends Component{
    state = { albums: null };
    
    componentWillMount(){
       var ref = firebase.database().ref('albums');
        ref.on("value", (snapshot) => {
            snapshot.val().forEach(album => {
                var band = album.wykonawca;
                var title = album.nazwa;
                var price = album.info.cena;
                var genre = album.info.gatunek;
                var publicationDate = album.info.rokWydania;
                var songs = album.utwory;
                /*
                console.log("Nazwa: " + title);
                console.log("Wykonawca: " + band);
                songs.forEach((song) => console.log(song));
                console.log(genre);
                */
            });
        this.setState({albums: snapshot.val()});
        //console.log(snapshot); => jakies gowno
        //console.log(snapshot.val()); => tablica z danymi
        }, (errorObject) => {
        console.log("The read failed: " + errorObject.code);
        });      
    }


    renderAlbumsList(props){
        const navigate = this.props.nawigacja;

        //var { navigate } = this.props.navigate;

        if (this.state.albums === null) {
            return (            
                <View style={styles.spinner}>
                  <ActivityIndicator size='large' style={styles.spinner} />
                </View>
            );
        }
        else {
            return this.state.albums.map(album => 
                <Album key={album.nazwa} band={album.wykonawca} title={album.nazwa} price={album.info.cena} genre={album.info.gatunek} publicationDate={album.info.rokWydania} 
                    songs={album.utwory} bandLogo={album.logoZespolu} albumCover={album.okladkaAlbumu}/> );
        }      
    }

    render(){
        return(
            <ScrollView>
                {this.renderAlbumsList()}
            </ScrollView>
        );
    }    
}

const styles = StyleSheet.create({
    spinner: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50
    }
  });

export default AlbumList;