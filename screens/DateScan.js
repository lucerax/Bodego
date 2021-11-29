import React, {useState} from 'react';
import {
    Text,
    View,
    Button, StyleSheet, Image
} from 'react-native';


export default function DateScan({route, navigation}) {
    const {itemId} = route.params;
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color: "blue"}}>WE SCANNING THE DATE FAM!</Text>
        <Text style={{color:"red"}}>itemId: {JSON.stringify(itemId)}</Text>
        {/* <Button
        title="Go to Scan"
        onPress={() => navigation.navigate('ScanWrapper')}
        />
        <Button title="Go to Auth" onPress={() => navigation.navigate('Auth')} />
        <Button title="Go back" onPress={() => navigation.goBack()} /> */}
    </View>
    );
}