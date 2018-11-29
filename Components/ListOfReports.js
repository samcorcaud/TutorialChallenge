import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import {B} from 'expo';


export class ListOfReports extends React.Component {
    render() {
        return (
            <View style={stylesList.container}>
                <View style={stylesList.header}>
                </View>
                <View style={stylesList.positionButton}>
                    <TouchableOpacity>
                        <View style={stylesList.touchableButton}>
                            <Text style={stylesList.textStyle}> Class </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={stylesList.touchableButton2}>
                            <Text style={stylesList.textStyle}> Class2 </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={stylesList.footer}>
                    <TouchableOpacity style={stylesList.touchablePosition} onPress={this.props.showReports}>
                        <View style={stylesList.touchableButton}>
                            <Text style={stylesList.textStyle}> Back </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
                    )}
}

const stylesList = StyleSheet.create({

    container:{
        flex: 1,
        width : '100%',
        //backgroundColor: '#72A2C0',
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    header:{
        position : 'absolute',
        height : 75,
        top : 0,
        width : '100%',
        backgroundColor: '#1D65A6',

    },
    footer:{
        position : 'absolute',
        height : 45,
        bottom : 0,
        width : '100%',
        //backgroundColor: '#1D65A6',
        alignItems: 'center'

    },
    textStyle:{
        fontStyle: 'normal',
        fontWeight: '400',
        color: 'white'

    },
    textInputStyle:{
        height: 50,
        width: 180,
        borderColor: 'white',
        borderWidth: 5

    },
    positionButton:{
        position: 'absolute',
        top : 100,
        flexDirection : 'row',
        marginLeft: 25,
    },
    touchableButton:{
        width: 160,
        backgroundColor: '#72A2C0',
        alignItems: 'center',
        height: 30,
        borderColor:'white',
        borderRadius:5,
        borderWidth: 2,
        //marginRight: 50

    },
    touchableButton2:{
        width: 160,
        backgroundColor: '#72A2C0',
        alignItems: 'center',
        height: 30,
        borderColor:'white',
        borderRadius:5,
        borderWidth: 2,
        marginRight: 30

    },
    touchablePosition:{
        position:'absolute',
        bottom: 10
    }
});
