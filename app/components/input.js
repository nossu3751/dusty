import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

class Inputs extends Component {
    state = { 
        name: 'Rhosung Park'
    }
    handleName = (text) => {
        this.setState({name: text})
    }
    getName = () => {
        return this.name;
    }
    render() {
        return(
            <View>
                <TextInput 
                    style = {styles.textInput}
                    placeholder = "ex: John Doe"
                    onChangeText = {(val) => this.handleName(val)}
                >
                </TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        borderRadius: 10,
        borderColor: '#777',
        width: 200,
        padding: 8,
        borderWidth: 1,
    }
});

export default Inputs;