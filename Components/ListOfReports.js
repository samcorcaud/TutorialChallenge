import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';
import {B} from 'expo';
import { API } from '../Backend/API';


export class ListOfReports extends React.Component {

    state = {reports: []};

    render() {
        return (
            <View style={stylesList.container}>
                <View style={stylesList.header}>
                    <Text style={stylesList.titleStyle}>cPark challenge</Text>
                </View>
                <View style={stylesList.positionButton}>
                    <TouchableOpacity onPress={() =>{
                        API.getData().then((reports) => this.setState({reports}));
                    }}>
                        <View style={stylesList.touchableButton}>
                            <Text style={stylesList.textStyle}> Class </Text>
                        </View>
                    </TouchableOpacity>
                    {/*<TouchableOpacity>
                        <View style={stylesList.touchableButton2}>
                            <Text style={stylesList.textStyle}> Class2 </Text>
                        </View>
                    </TouchableOpacity>*/}
                </View>


                <ScrollView style={{backgroundColor: 'red', height: '50%', width: '90%', position : 'absolute'}}>


                    <View>{this.state.reports.length ?
                        this.state.reports.map((report, key) => {
                            return <ReportText
                                title={report.title}
                                longitude={report.longitude}
                                latitude={report.latitude}
                                date={report.date}
                                key={key}
                            />
                        })

                        : <Text>"No reports yet !"</Text>}</View>
                </ScrollView>



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

const ReportText = ({title, longitude, latitude, date}) =>
    <View style={{marginBottom: 20}}>
        <Text>{"Title : " + title}</Text>
        <Text>{"longitude : " + longitude}</Text>
        <Text>{"latitude : " + latitude}</Text>
        <Text>{"date : " + date}</Text>
    </View>


const stylesList = StyleSheet.create({

    container:{
        flex: 1,
        width : '100%',
        //backgroundColor: '#72A2C0',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
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
        marginLeft: 100,
        //justifyContent: 'center'
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
    titleStyle:{
        fontStyle: 'normal',
        fontSize : 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        bottom : 2,
        position : 'absolute',


    },

    touchablePosition:{
        position:'absolute',
        bottom: 10
    }
});
