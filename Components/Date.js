import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

export class Date extends React.Component{

    state = {
        isDateTimePickerVisible: false,
    };

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this._hideDateTimePicker();
    };

    render(){
        if(Platform.OS==="ios"){
        return(
            <TouchableOpacity style={stylesDate.dateInput}>
                <View style={stylesDate.dateTouchableButton}>
                    <Text style={stylesDate.textStyle}>Send report</Text>
                </View>
            </TouchableOpacity>
            );
        }else{
            return(
                <TouchableOpacity>
                    <View style={stylesDate.dateTouchableButton}>
                        <Text style={stylesDate.textStyle}>Choose Date</Text>
                    </View>
                </TouchableOpacity>
            );
        }
    }
}

const stylesDate = StyleSheet.create({
    dateInput:{
        height: 50,
        width: 250,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5
    },
    dateTouchableButton:{
        width: 180,
        //backgroundColor: '#1D65A6',
        alignItems: 'center',
        height: 60,
        justifyContent: 'center',
        //borderColor:'white',
        borderRadius:5,
        borderWidth: 2,

    },
    touchablePosition:{
        position:'absolute',
        bottom: 10
    },
    textStyle:{
        fontStyle: 'normal',
        fontWeight: '400',
        color: 'black',
    },
});