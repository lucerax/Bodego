    import React, {Component} from 'react';
    import {
    Text,
    View,
    Button
    } from 'react-native';


  export default function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Temp')}
        />
        <Button title="Go to Auth" onPress={() => navigation.navigate('Auth')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }