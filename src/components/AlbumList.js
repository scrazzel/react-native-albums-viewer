import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import firebase from 'firebase';
import Album from './Album';
import AlbumDetails from './AlbumDetails';


class AlbumList extends Component{
    state = { albums: [] };
    
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

    renderAlbumsList(){
        return this.state.albums.map(album => 
            <Album key={album.nazwa} band={album.wykonawca} title={album.nazwa} price={album.info.cena} genre={album.info.gatunek} publicationDate={album.info.rokWydania} 
            songs={album.utwory} bandLogo={album.logoZespolu} albumCover={album.okladkaAlbumu} />
/*
            var band = album.wykonawca;
            var title = album.nazwa;
            var price = album.info.cena;
            var genre = album.info.gatunek;
            var publicationDate = album.info.rokWydania;
            var songs = album.utwory;
            var bandLogo = album.logoAlbumu;
            var albumImage = album.logoAlbumu;
*/
        );
    }

    render(){
        return(
            <ScrollView>
                {this.renderAlbumsList()}
            </ScrollView>
        );
    }    
}

export default AlbumList;