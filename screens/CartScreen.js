import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import {PrimaryButton, SecondaryButton} from '../components/Button';

import BottomTabNavigator from '../components/BottomTabNavigator';


const foods = [
    {
      id: '1',
      name: "Atoria's Lavash",
      ingredients: 'Bread',
      old_price: '8.30',
      new_price: '7.50',
      image: require('../assets/product_images/lavash.png'),
    },
    {
      id: '2',
      name: 'Nature Own Brioche',
      ingredients: 'Bread',
      old_price: '7.10',
      new_price: '5.90',
      image: require('../assets/product_images/brioche.jpg'),
    },
    {
        id:3,
        name: 'Nature Own Brioche',
        ingredients: 'Bread',
        old_price: '7.10',
        new_price: '6.30',
        image: require('../assets/product_images/brioche.jpg'),
        },
  ];
  

const CartScreen = ({navigation}) => {
  const CartCard = ({item}) => {
    return (
      <View style={style.cartCard}>
        <Image source={item.image} style={{height: 80, width: 80}} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{fontFamily:'Inter-SemiBold', fontSize: 15}}>{item.name}</Text>
          {/* <Text style={{fontSize: 13, color: '#0'}}>
            {item.ingredients}
          </Text> */}


            <Text style= {{fontFamily: 'Inter-Light'}}>
                Before: 
                <Text style={{fontSize: 14 , fontFamily: 'Inter-Bold', textDecorationLine: 'line-through', textDecorationStyle: 'solid', marginLeft:30}}>
                    ${item.old_price}
                </Text>
              </Text>
            

          <Text style={{fontSize: 14, fontFamily: 'Inter-Bold'}}>
              <Text style= {{fontFamily: 'Inter-Light', marginLeft: 20}}>
              New: 
              </Text>
              ${item.new_price}
            </Text>


        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
          <View style={style.actionBtn}>
            <Text style={{fontFamily: 'Inter', fontSize: 10, marginTop:5}}>Remove</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: "#", flex: 1}}>
      <View style={style.header}>
        <FontAwesomeIcon icon={faArrowLeft} size={28} color='#000' onPress={navigation.goBack} />
        <View style={{alignContent:'center', paddingHorizontal:120}}>
            <Text style={{fontSize: 30, fontFamily: 'Inter-Black', alignContent:'center', color:'#000'}}>Cart</Text>
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={foods}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <Text style={{fontSize: 17, fontFamily:'Inter-Black', marginLeft: 10}}>
                Total Cost
              </Text>
              <Text style={{fontSize: 20, fontWeight: 'Inter-Bold', marginRight: 20}}>$19.70</Text>
            </View>
            <View style={{marginHorizontal: 30, marginTop: 10}}>
              <SecondaryButton title="Generate verification code" />
            </View>
          </View>
        )}
      />
    <BottomTabNavigator background="#F5F5F8" colorIcon="#000" colorTitle="#000" navigation={navigation} />

    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 140,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: '#FFF',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 60,
    height: 30,
    backgroundColor: '#CCC',
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default CartScreen;