import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios';
import {AIR_VISUAL_KEY} from 'react-native-dotenv';
import Location from './location.js';

class AirQuality extends Component{

    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    componentDidMount(){
        const res = axios({
            method: 'get',
            url: `http://api.airvisual.com/v2/nearest_city?key=${AIR_VISUAL_KEY}`
        }).then(response => {
            console.log(response.data);
            console.log(response.data.data.current);
        }).catch(error => {
            console.log(error);
        });
    }

    render(){
        return(
            <View></View>
        );
    }

}

export default AirQuality;
