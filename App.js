/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  SafeAreaView, StyleSheet, ScrollView, View,
  Text, TextInput, StatusBar, PickerIOSComponent,
} from 'react-native';

import {
  Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {createStore} from 'redux';
import Geolocation from '@react-native-community/geolocation';
import Inputs from './app/components/input.js';
import Location from './app/components/location.js';
import Clock from './app/components/clock.js';
import AirQuality from './app/components/air_quality.js';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Providers from './app/navigation'
// const initialState = {
//     latitude: "",
//     longitude: "",
//     city: "",
//     stateName: "",
//     country: "",
// }

// const reducer = (state = initialState) => {
//     return state
// }

// const store = createStore(reducer)
class HomeScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: "Rhosung Park",
    };
  }

  render(){
    return(
      <View style={styles.container}>
            <View style={styles.testSquare}>
              <Text> Hello, {this.state.name}</Text>
            </View>
            {/* <Provider store={store}> */}
              <Location />
            {/* </Provider> */}
            <AirQuality />
            <View>
              <Text>
                <Clock />
              </Text>
            </View>
            <View>
              <TextInput 
                style={styles.textInput} 
                placeholder = "ex: John Doe" 
                onChangeText = {(val) => this.setState({name: val})}>
              </TextInput>
            </View>
          </View>
    );
  }
}

function OtherScreen(){
  return(
    <View>
      <Text> Other Screen </Text>
    </View>
  )
}

const Stack = createStackNavigator();

class App extends Component {
  
  render(){
    return (
      <Providers />
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen name="Home" component={HomeScreen} />
      //     <Stack.Screen name="Other" component={OtherScreen} />
      //   </Stack.Navigator>
      // </NavigationContainer>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  testSquare: {
    padding: 20,
    backgroundColor: 'pink',
  },
  textInput: {
    borderRadius: 10,
    borderColor: '#777',
    width: 200,
    padding: 8,
    borderWidth: 1,
  }
});

export default App;
