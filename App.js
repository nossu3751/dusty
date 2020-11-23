/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  PickerIOSComponent,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Geolocation from '@react-native-community/geolocation';
import Inputs from './app/components/input.js';
import Location from './app/components/location.js';

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return(
      <Text >
        It is {this.state.date.toLocaleTimeString()}
      </Text>
        
    )
  }
}


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "Rhosung Park",
    };
  }
  
  render(){

    return (
      <View style={styles.container}>
        <View style={styles.testSquare}>
          <Text> Hello, {this.state.name}</Text>
        </View>
        <Location />
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
