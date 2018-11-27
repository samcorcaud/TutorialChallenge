import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export class Test extends React.Component {
    render(){
        return(
            <View style={stylesTest.container}>
            </View>
        );
    }
}

const stylesTest = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },header:{
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
        backgroundColor: '#1D65A6',
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
        bottom: 10,

    },
    touchableButton:{
        width: 160,
        backgroundColor: '#72A2C0',
        alignItems: 'center',
        height: 30,
        borderColor:'white',
        borderRadius:5,
        borderWidth: 2,

    },
    touchablePosition:{
        position:'absolute',
        bottom: 10
    }
});