import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Platform } from 'react-native';
import {LinearGradient} from 'expo';
import {DatePicker} from "./DatePicker";
import {API} from '../Backend/API';


export class ReportView extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title : '',
            latitude: null,
            longitude: null,
            error: null,
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
                console.log(position.coords.latitude)
                console.log(position.coords.longitude)
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }
    render() {
        return (
            <View style={stylesReport.container}>
                <View style={stylesReport.header}>
                    <Text style={stylesReport.titleStyle}>cPark challenge</Text>
                </View>
                <View style={stylesReport.boxStyle}>
                    <Text style={stylesReport.textStyle}>Title</Text>
                    <TextInput style={stylesReport.textInputStyle}
                               placeholder="Title"
                                onChangeText={(title) => this.setState({title})}
                                value={this.state.title}/>
                    <Text style={stylesReport.textStyle}>Date</Text>
                    <DatePicker/>
                    <View style={stylesReport.sendTouchable}>
                        <TouchableOpacity  onPress={() => {
                            API.postData({
                                position : {
                                    lat: this.state.latitude,
                                    long: this.state.longitude
                                },
                                title:this.state.title,
                            })
                        }}>
                            <View style={stylesReport.sendTouchableButton}>
                                <Text style={stylesReport.textStyle}>Send report</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
             {/*<View style={stylesReport.positionButton}>
                <Button title={"List of reports"} style={stylesReport.buttonStyle} onPress={this.props.showList} color={"#6A8A82"}/>
                </View>*/}
                <View style={stylesReport.footer}>
                    <TouchableOpacity style={stylesReport.touchablePosition} onPress={this.props.showList}>
                        <View style={stylesReport.touchableButton}>
                            <Text style={stylesReport.textStyle}>Lists of reports</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const stylesReport = StyleSheet.create({
    container: {
        flex: 1,
        width : '100%',
        backgroundColor: '#C2D3DA',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    header:{
        position : 'absolute',
        height : 75,
        top : 0,
        width : '100%',
        backgroundColor: '#1D65A6',
        alignItems : 'center',
        textAlign: 'center',


    },
    titleStyle:{
        fontStyle: 'normal',
        fontSize : 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        bottom : 2,
        position : 'absolute',


    },
    footer:{
        position : 'absolute',
        height : 45,
        bottom : 0,
        width : '100%',
        //backgroundColor: '#1D65A6',
        alignItems: 'center'

    },
    boxStyle:{
      borderRadius : 5,
      borderWidth : 2,
      //margin: 10,
      borderColor : 'black',
      height : 200,
      width : '80%',
        alignItems : 'center'

    },
    textStyle:{
        fontStyle: 'normal',
        fontWeight: '400',
        color: 'black',
        textAlign: 'center',
    },
    textInputStyle:{
        height: 50,
        width: 180,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        textAlign: 'center',


    },
    buttonStyle:{
        position: 'absolute',
        bottom: 0,
        width : "80%",
        color: "#F18904",


    },
    positionButton:{
        position: 'absolute',
        bottom: 10,

    },
    touchableButton:{
        width: 160,
        backgroundColor: '#1D65A6',
        alignItems: 'center',
        height: 30,
        //borderColor:'white',
        borderRadius:5,
        borderWidth: 2,

    },
    touchablePosition:{
        position:'absolute',
        bottom: 10
    },
    sendTouchable:{
        position:'absolute',
        bottom: 10
    },
    sendTouchableButton:{
        width: 160,
        //backgroundColor: '#72A2C0',
        alignItems: 'center',
        height: 30,
        borderColor:'black',
        borderRadius:5,
        borderWidth: 2,
    }
});
