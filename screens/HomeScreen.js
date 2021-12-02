import React, {Component, useState, useEffect} from 'react';
import {
    Text,
    View,
    Button,
    Image
} from 'react-native';
import ScanBarcodeApp from './ScanBarcodeApp';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';

import ScanWrapper from './ScanWrapper';
import TempScan from './TempScan';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faSearch, faInbox, faUser, faPlus, faCalendar, faBarcode} from '@fortawesome/free-solid-svg-icons';

import { Tab, TabButton, Title, Add } from './BottomTabStyles';

import { SearchBar } from 'react-native-elements';

import {
  HeaderSearchBar,
  HeaderClassicSearchBar
} from "react-native-header-search-bar";
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';

import { PrimaryButton, SecondaryButton } from '../components/Button';


const offers = [
  {
    id: '1',
    name: "Crafts and Grapes",
    text: "Get up to 15% off milk and eggs in the next 6 hours at Crafts and Grapes Markets, Berkeley",
    image: require('./offer.png')
  },
  {
    id: '2',
    name: "Kathmandu",
    text: "Get up to 15% off milk and eggs in the next 6 hours at Kathmandu Markets, Berkeley",
    image: require('./offer.png')
  },
];


function BottomTabNavigator({ navigation, background, colorTitle, colorIcon }) {
  return (
      <Tab background={background}>
          <TabButton onPress={() => navigation.navigate("HomeScreen")}>
              {<FontAwesomeIcon icon={faHome} size={28} color={colorIcon} /> }
              {/* <Title style={{ color: colorTitle }}>Home</Title> */}
          </TabButton>
          <TabButton onPress={() => navigation.navigate("ScanWrapper")}>
              <FontAwesomeIcon icon={faBarcode} size={28} color={colorIcon} />
              {/* <Title style={{ color: colorTitle }}>Scan Barcode</Title> */}
          </TabButton>
          <TabButton onPress={() => navigation.navigate("TempScan")}>
              <FontAwesomeIcon icon={faCalendar} size={28} color={colorIcon} />
              {/* <Title style={{ color: colorTitle }}>Scan Expiry</Title> */}
          </TabButton>
          <TabButton onPress={() => navigation.navigate("Auth")}>
              <FontAwesomeIcon icon={faUser} size={28} color={colorIcon} />
              {/* <Title style={{ color: colorTitle }}>Account</Title> */}
          </TabButton>
      </Tab>
  )
}


const Card = ({item, navigation}) => {
  return (
    <TouchableHighlight
      underlayColor='#FFF'
      activeOpacity={0.9}
      onPress={() => navigation.navigate('HomeScreen')}>
      <View style={style.card}>
        <View style={{alignItems: 'center', top: 10}}>
          <Image source={item.image} style={{height: 50, width: 50}} />
        </View>


        <View style={{marginHorizontal: 20, marginTop:20, alignItems:'center'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.name}</Text>
        </View>


        <View style={{marginHorizontal: 15, marginVertical:10}}>
          <Text>{item.text} </Text>
        </View>


        <View
          style={{
            marginTop: 10,
            marginHorizontal: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={style.addToCartBtn}>
            <Text style={{fontSize:12, fontFamily: 'Inter'}}>Learn more</Text>
          </View>

        </View>
      </View>
    </TouchableHighlight>
  );
};




  




export default function HomeScreen({navigation}) {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  
    useEffect(() => {
      setFilteredDataSource(offers);
      setMasterDataSource(offers);
    }
       );
  const searchFilterFunction = (text) => {
  // Check if searched text is not blank
  if (text) {
    // Inserted text is not blank
    // Filter the masterDataSource
    // Update FilteredDataSource
    const newData = masterDataSource.filter(
      function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        const k = itemData.indexOf(textData) > -1;
        console.log(textData);
        // console.log(item.title);
        return itemData.indexOf(textData) > -1;
    });
    setFilteredDataSource(newData);
    setSearch(text);
  } else {
    // Inserted text is blank
    // Update FilteredDataSource with masterDataSource
    setFilteredDataSource(masterDataSource);
    setSearch(text);
  }
};

return (
  <SafeAreaView style={{flex: 1, backgroundColor: '#F5F5F8'}}>
    <View style={style.header}>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontFamily: 'Inter', fontSize: 40, color: '#000'}}>Hello,</Text>
          <Text style={{fontFamily: 'Inter-Bold', fontSize: 40, marginLeft: 10, color: '#000'}}>Oski</Text>
          <Image
          source={require('./oski_pf.jpg')}
          style={{height: 50, width: 50, borderRadius: 30, marginLeft:50, marginTop:5}}
        />
        </View>

      
      </View>
    </View>


      <View
        style={{
          marginTop: 25,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={style.inputContainer}>
          <FontAwesomeIcon icon={faSearch} size={20} />
            <TextInput
              style={{flex: 1, fontSize: 16, marginLeft:10}}
              placeholder="Search for participating stores"
              onChangeText={(text) => {
                searchFilterFunction(text);
                setFilteredDataSource(['']);
                console.log(JSON.stringify(filteredDataSource));
              }}
              value={search}
            />
        </View>
      </View>

      {/* <View>
        <Card name="Crafts and Grapes" text="Get up to 15% off milk and eggs in the next 6 hours at Crafts and Grapes Markets, Berkeley" navigation={navigation}></Card>
      </View> */}
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={1}
        keyExtractor={(item, index) => index.toString()}
        data={filteredDataSource}
        renderItem={({item}) => <Card item={item} />}
      />

      {/* <SecondaryButton onPress={() => navigation.navigate("CartScreen")}>
        <Text>Cart</Text>
      </SecondaryButton> */}

      <BottomTabNavigator background="#F5F5F8" colorIcon="#333333" colorTitle="#000" navigation={navigation} />


  </SafeAreaView>


  /* {<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Hello, Oski</Text>
    <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    { <Button
      title="Go to Scan"
      onPress={() => navigation.navigate('ScanWrapper')}
    />
    <Button title="Go to Auth" onPress={() => navigation.navigate('Auth')} />
    <Button title="Scan Expiry " onPress={() => navigation.navigate('TempScan')} />
    <Button title="Go back" onPress={() => navigation.goBack()} /> 
    
    
  </View> */
);
}


const style = StyleSheet.create({
  header: {
    marginTop: 30,
    marginLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 0,
    backgroundColor: '#FFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: '#FFF',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 210,
    marginHorizontal: 30,
    marginBottom: 20,
    marginTop: 30,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: '#FFF',
  },
  addToCartBtn: {
    height: 30,
    width: 100,
    borderRadius: 20,
    backgroundColor: '#5CDB95',
    justifyContent: 'center',
    alignItems: 'center',
  },
});