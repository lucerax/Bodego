import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PrimaryButton} from '../components/Button';

const OnBoardScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#5CDB95", opacity: 1.1}}>
      <View style={style.titleContainer}>
        <Text style={{
            bottom: 10,
            color: "#fdfdfd",
            fontFamily: "Inter-Black",
            fontSize: 65,
            shadowRadius: 6,
            shadowOpacity: 0.8,
            shadowColor: "#757575",
            shadowOffset: {
              width: 1,
              height: 3,
            },
          }}>
            Bodego
        </Text>
      </View>
      <View style={{height: 200}}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
            top: 10,
          }}
          source={require('./logo.png')}
        />
      </View>

      <View style={style.textContainer}>
        <View>
          <Text
            style={style.description}>
            Get discounts on your groceries today!
          </Text>
        </View>
      </View>

      <View style={{marginBottom: 50, paddingHorizontal: 30}}>
        <PrimaryButton
          onPress={() => navigation.navigate('Auth')}
          title="Get Started"
        />
      </View>
      
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  titleContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 80,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    marginTop: 80,
  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: "#FFF",
    marginHorizontal: 5,
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#FFF',
    marginHorizontal: 5,
  },
  description: {
    fontFamily: 'Inter-Bold',
    fontSize: 26,
    textAlign: 'center',
    color: '#FFF'
  }
});

export default OnBoardScreen