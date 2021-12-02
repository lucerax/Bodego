  /**
   * Sample React Native App
   * https://github.com/facebook/react-native
   *
   * @format
   * @flow strict-local
   */
  import React from 'react';
  import LoginScreen from "react-native-login-screen";
  import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Alert,
    TouchableOpacity,
    Image,
    useColorScheme,
    View,
    Button
  } from 'react-native';
  import { NavigationContainer } from '@react-navigation/native';
  import { navigationRef } from './RootNavigation';
  import {createNativeStackNavigator} from '@react-navigation/native-stack';
  import {RNCamera} from 'react-native-camera';
  import colors from './assets/colors/colors';

  import logo from './screens/logo.png';

  import {
    DateScan,
    HomeScreen,
    ScanWrapper,
    TempScan,
    OnBoardScreen,
    CartScreen
  } from './screens'

  import BottomTabNavigator from './components/BottomTabNavigator';

  const Stack = createNativeStackNavigator();

  const onBarCodeRead = (e) => {
    Alert.alert("Barcode values is" + e.data, "Barcode type is" + e.type);
  }

  const renderLogo = () => (
    <View
      style={{
        bottom: 50,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={{marginTop:100}}>
        <Image
          resizeMode="contain"
          source={require("./screens/logo.png")}
          style={{ height: 150, width: 150 }}
        />
      </View>
      
      <View style={{marginTop:50}}>
        <Text
          style={{
            bottom: 32,
            color: "#fdfdfd",
            fontFamily: "Inter-Black",
            fontSize: 50,
            shadowRadius: 3,
            shadowOpacity: 0.7,
            shadowColor: "#757575",
            shadowOffset: {
              width: 0,
              height: 3,
            },
          }}
        >
          Bodego
        </Text>
      </View>
    </View>
  );


  function Auth({navigation}) {
    return (
      <SafeAreaView style={{backgroundColor: '#FFF'}}>
      <LoginScreen
        source={require('./assets/empty_bg.png')}
        logoComponent={renderLogo()}
        labelTextStyle={{
          color: "#adadad",
          fontFamily: "Now-Bold",
        }}
        logoTextStyle={{
          fontSize: 27,
          color: "#fdfdfd",
          fontFamily: "Now-Black",
        }}
        loginButtonTextStyle={{
          color: "#fdfdfd",
          fontFamily: "Now-Bold",
        }}
        textStyle={{
          color: "#757575",
          fontFamily: "Now-Regular",
        }}
        signupStyle={{
          color: "#fdfdfd",
          fontFamily: "Now-Bold",
        }}
        usernameOnChangeText={(username) => console.log("Username: ", username)}
        onPressSettings={() => alert("Settings Button is pressed")}
        passwordOnChangeText={(password) => console.log("Password: ", password)}
        onPressLogin={() => {
          navigation.navigate('HomeScreen')
        }}
        onPressSignup={() => {
          console.log("onPressSignUp is pressed");
        }}
      >
        
        </LoginScreen>

        <View
          style={{
            position: "relative",
            alignSelf: "center",
            marginTop: 64,
          }}
        >
          <Text>Bodego</Text>
          <Text style={{flex:1, color: "white", fontSize: 30 }}>
            Inside Login Screen Component
          </Text>
        </View>
        </SafeAreaView>
    );
  }


  function Scan({naviagation}) {
    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.preview}
          torchMode={this.state.torchOn ? RNCamera.constants.TorchMode.on : RNCamera.constants.TorchMode.off}
          onBarCodeRead={this.onBarCodeRead}
          ref={cam => this.camera = cam}
          aspect={RNCamera.constants.Aspect.fill}
          >
          <Text style={{
          backgroundColor: 'white'
          }}>BARCODE SCANNER</Text>
        </RNCamera>
        <View style={styles.bottomOverlay}>
          <TouchableOpacity onPress={() => this.handleTourch(this.state.torchOn)}>
            <Image style={styles.cameraIcon}
            source={this.state.torchOn === true ? require('./assets/aboutreact.png') : require('./assets/favicon.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const App = ()  => {
  
    return (
      <NavigationContainer ref = {navigationRef}>
        <Stack.Navigator initialRouteName="OnBoard" screenOptions={{headerShown: false}}>
          <Stack.Screen name="OnBoard" component={OnBoardScreen} />
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name = "HomeScreen" component={HomeScreen} />
          <Stack.Screen name = "CartScreen" component={CartScreen} />
          <Stack.Screen name = "ScanWrapper" component={ScanWrapper} />
          <Stack.Screen name = "DateScan" component={DateScan} />
          <Stack.Screen name = "TempScan" component={TempScan} />
          <Stack.Screen name="Navigator" component={BottomTabNavigator} />
        </Stack.Navigator>

      </NavigationContainer>
    );
      
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    cameraIcon: {
      margin: this,
      height: 40,
      width: 40,
    },
    bottomOverlay: {
      position: "absolute",
      width: "100%",
      flex: 20,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      fontFamily: 'Inter-Bold',
      color: '#5CDB95',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: '#5CDB95',
    },
    highlight: {
      fontWeight: '700',
    },
  });
  
  export default App;
  