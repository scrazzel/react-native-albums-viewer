/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { StackNavigator } from 'react-navigation';
import AlbumDetails from './src/components/AlbumDetails';
import Home from './src/components/Home';

const AppNavigation = StackNavigator({
    Home: {
      screen: Home
    },
    AlbumDetails: {
      screen: AlbumDetails
    }
  }
);

export default AppNavigation;