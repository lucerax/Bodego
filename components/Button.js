import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

const PrimaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.primary}>
        <Text style={style.primaryTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};


const SecondaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.secondary}>
        <Text style={style.secondaryTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  primaryTitle: {color: '#000', fontFamily: 'Inter', fontSize: 16, opacity: 1},
  secondaryTitle: {color: '#FFF', fontFamily: 'Inter', fontSize: 16, opacity: 1},
  primary: {
    backgroundColor: '#FFF',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondary: {
    backgroundColor: '#5CDB95',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {PrimaryButton, SecondaryButton};