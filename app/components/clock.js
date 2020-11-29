import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

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
          {this.state.date.toLocaleTimeString()}
        </Text>
          
      )
    }
}

export default Clock;