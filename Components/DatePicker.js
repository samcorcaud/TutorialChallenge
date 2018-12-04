import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

export class DatePicker extends React.Component{

    state = {
        isDateTimePickerVisible: false,
        dateTime: new Date()
    };

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatetimePicked = (datetime) => {
        console.log('A date has been picked: ', datetime);
        this._hideDateTimePicker();
        this.props.setDate(datetime);
        this.setState({dateTime: datetime});
    };

    render(){
        if(Platform.OS==="ios"){
        return(
            <View style={{flex : 1}}>
                <TouchableOpacity onPress={this._showDateTimePicker}>
                    <View style={stylesDate.dateTouchableButton}>
                        <Text style={stylesDate.textStyle}>{JSON.stringify(this.state.dateTime)}</Text>
                    </View>
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatetimePicked}
                    onCancel={this._hideDateTimePicker}
                />
            </View>
            );
        }else{
            return(
                <View style={{flex : 1}}>
                <TouchableOpacity onPress={this._showDateTimePicker}>
                    <View style={stylesDate.dateTouchableButton}>
                        <Text style={stylesDate.textStyle}>
                            {this.state.dateTime.toDateString()+ "\n"+ this.state.dateTime.toLocaleTimeString()}</Text>
                    </View>
                </TouchableOpacity>
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatetimePicked}
                        onCancel={this._hideDateTimePicker}
                    />
                </View>
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
        textAlign: 'center'
    },
});
