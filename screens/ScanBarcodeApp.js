import React, { Component } from 'react';
// import BarcodeScanner from '@react-native-barcodescanner';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image,
  AppRegistry,
  Button,
} from 'react-native';
import BarcodeScanner from 'react-native-scan-barcode';
import * as RootNavigation from '../RootNavigation';
export default class ScanBarcodeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      torchMode: 'off',
      cameraType: 'back',
      haveScanned: false,
      scanVal: 0
    };
  } 


  barcodeReceived = (e) => {
    console.log('Barcode: ' + e.data);
    console.log('Type: ' + e.type);
    this.setState({
      haveScanned: true,
      scanVal: e.data
    })
  }

  render() {
    console.log(this.state.haveScanned);
    if (this.state.haveScanned == false) {
      return (
            <BarcodeScanner
              onBarCodeRead={this.barcodeReceived}
              style={{ flex: 1 }}
              torchMode={this.state.torchMode}
              cameraType={this.state.cameraType}
            /> 
      );
    } else {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Button
            title="Go to Scan"
            onPress={() => RootNavigation.navigate('DateScan', {itemId: this.state.scanVal})}
          />
          </View>
      )
    }
    
  }


}

AppRegistry.registerComponent('ScanBarcodeApp', () => ScanBarcodeApp);