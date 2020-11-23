import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

class Location extends Component{
    constructor(props){
        super(props);
        this.state = {
            latitude: "",
            longitude: "",
        };
    };

    componentDidMount(){
        Geolocation.getCurrentPosition(
            info => {
                console.warn(info.coords.longitude);
                console.warn(info.coords.latitude);
                this.setState({
                  latitude: info.coords.latitude,
                  longitude: info.coords.longitude,
                })
            }
        )
    }

    componentWillUnmount(){
        this.setState({
            latitude: "",
            longitude: "",
        })
    }

    render(){
        return(
            <View>
                <Text>
                    Latitude: {this.state.latitude},
                    Longitude: {this.state.longitude}.
                </Text>
            </View>
        ); 
    }
}

export default Location;