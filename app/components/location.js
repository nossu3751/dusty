import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {HERE_API_NAME, HERE_API_KEY} from 'react-native-dotenv';
import axios from 'axios';

class Location extends Component{

    constructor(props){
        super(props);
        this.state = {
            latitude: "",
            longitude: "",
            city: "",
            stateName: "",
            country: "",
        };
    };

    componentDidMount(){
        this.getLocationInfo();
    }

    async getLocationInfo(){
        await Geolocation.getCurrentPosition(
            info => {
                this.setState({
                  latitude: info.coords.latitude,
                  longitude: info.coords.longitude,
                });

                const lat = this.state.latitude;
                const long = this.state.longitude;
                const address = `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?apiKey=${HERE_API_KEY}&mode=retrieveAddresses&prox=${lat},${long}`;
    
                let res = axios({
                    method: 'get',
                    url: address,
                }).then(response => {
                    this.setState({
                        city: response.data.Response.View[0].Result[0].Location.Address.City,
                        stateName: response.data.Response.View[0].Result[0].Location.Address.AdditionalData[1].value,
                        country: response.data.Response.View[0].Result[0].Location.Address.AdditionalData[0].value
                    });
                    console.log(this.state.city);
                    console.log(this.state.stateName);
                    console.log(this.state.country);
                }).catch(error => console.warn(error));
            } 
        );
    };

    componentWillUnmount(){
        this.setState({
            latitude: "",
            longitude: "",
            city: "",
            stateName: "",
        })
    }

    render(){
        return(
            <View style={locationStyles.location}>
                <Text style={locationStyles.city}>
                    {this.state.city}
                </Text>
                <Text>
                    {(this.state.country == "United States")?this.state.stateName:""}
                </Text>
            </View>
        ); 
    }
}

export default Location;

locationStyles = StyleSheet.create({
    location: {
        alignItems: 'center'
    },
    city: {
        fontSize: 20,
    }
});