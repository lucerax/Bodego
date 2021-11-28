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
    useColorScheme,
    View,
    Button
  } from 'react-native';
  import { NavigationContainer } from '@react-navigation/native';
  import {createNativeStackNavigator} from '@react-navigation/native-stack';
  import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';
  
  import colors from './assets/colors/colors';

  const Stack = createNativeStackNavigator();

  const Section = ({children, title}) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
      <View style={styles.sectionContainer}>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {title}
        </Text>
        <Text
          style={[
            styles.sectionDescription,
            {
              color: isDarkMode ? Colors.light : Colors.dark,
            },
          ]}>
          {children}
        </Text>
      </View>
      // <LoginScreen />
    );
  };

  const Auth = () => {
    return (
      <LoginScreen
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
            // color: "#adadad",
            fontFamily: "Now-Bold",
          }}
          textStyle={{
            color: "#757575",
            // color: "fdfdfdfd",
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
            console.log("onPressLogin is pressed");
          }}
          onPressSignup={() => {
            console.log("onPressSignUp is pressed");
          }}
        >
          <View
            style={{
              position: "relative",
              alignSelf: "center",
              marginTop: 64,
            }}
          >
            <Text style={{ color: "white", fontSize: 30 }}>
              Inside Login Screen Component
            </Text>
          </View>
        </LoginScreen>
    );
  }

  function Temp({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.navigate('Temp')}
        />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
  
  const App = ()  => {
  
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Temp" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Auth" component={Auth} />
          {/* <Stack.Screen name = "Temp" component={Temp} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
      
  };
  
  const styles = StyleSheet.create({
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
  