import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo'

export class ReportView extends React.Component {

    constructor(props){
        super(props);
        this.state = {title : '',
                        date : ''
        };
    }
    render() {
        return (
            <View style={stylesReport.container}>
                <View style={stylesReport.header}>
                    <Text style={stylesReport.textStyle}>cPark challenge</Text>
                </View>
                <View style={stylesReport.boxStyle}>
                    <Text style={stylesReport.textStyle}>Title</Text>
                    <TextInput style={stylesReport.textInputStyle}
                               placeholder="Lysandre"
                                onChangeText={(title) => this.setState({title})}
                                value={this.state.title}/>
                    <Text style={stylesReport.textStyle}>Date</Text>
                    <TextInput style={stylesReport.textInputStyle}
                           onChangeText={(date) => this.setState({date})}
                           value={this.state.date}/>
                    <View style={stylesReport.sendTouchable}>
                        <TouchableOpacity>
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
        alignItems : 'center'

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
    },
    textInputStyle:{
        height: 50,
        width: 180,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5

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
