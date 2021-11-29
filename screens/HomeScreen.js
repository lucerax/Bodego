    import React, {Component} from 'react';
    import {
        Text,
        View,
        Button
    } from 'react-native';
    import ScanBarcodeApp from './ScanBarcodeApp';


  export default function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Scan"
          onPress={() => navigation.navigate('ScanWrapper')}
        />
        <Button title="Go to Auth" onPress={() => navigation.navigate('Auth')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }