import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  View,
} from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';


export default function SettingsScreen() {
  return (
    <Text> Now we are cooking with gas on the Settings page</Text>
);}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};
