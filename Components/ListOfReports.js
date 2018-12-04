import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import {B} from 'expo';
import { API } from '../Backend/API';

export class ListOfReports extends React.Component {

    constructor(props){
        super(props);
        this.state = {reports: [], reportsLoading: true};
        this.sortByDate = this.sortByDate.bind(this);
        this.sortByDistance = this.sortByDistance.bind(this);
    }


    componentDidMount(){
        API.getData().then((reports) => this.setState({reports, reportsLoading: false}));
        navigator.geolocation.getCurrentPosition((position) => this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude}));
    }

    sortByDate(){
        let reports = this.state.reports.sort((a, b) => new Date(b.date) - new Date(a.date))
        this.setState({reports})
        console.log('Sorting by date', reports)
    }

    sortByDistance(){
        let reports = this.state.reports.sort((a, b) => this.distance(this.state.latitude, this.state.longitude, a.latitude, a.longitude, 'K') -
                this.distance(this.state.latitude, this.state.longitude, b.latitude, b.longitude, 'K'))
        this.setState({reports});
        console.log('Sorting by distance', reports)
    }

    distance(lat1, lon1, lat2, lon2, unit) {
        if ((lat1 === lat2) && (lon1 === lon2)) {
            return 0;
        }
        else {
            let radlat1 = Math.PI * lat1/180;
            let radlat2 = Math.PI * lat2/180;
            let theta = lon1-lon2;
            let radtheta = Math.PI * theta/180;
            let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180/Math.PI;
            dist = dist * 60 * 1.1515;
            if (unit==="K") { dist = dist * 1.609344 }
            if (unit==="N") { dist = dist * 0.8684 }
            return dist;
        }
    }

    render() {
        return (
            <View style={stylesList.container}>
                <View style={stylesList.header}>
                    <Text style={stylesList.titleStyle}>cPark challenge</Text>
                </View>
                <View style={stylesList.positionButton}>
                    <TouchableOpacity onPress={this.sortByDate}>
                        <View style={stylesList.touchableButton}>
                            <Text style={stylesList.textStyle}> Sort By Date </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.sortByDistance}>
                        <View style={stylesList.touchableButton2}>
                            <Text style={stylesList.textStyle}> Sort By Distance </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                    {this.state.reportsLoading ?
                        <ActivityIndicator/>
                    :
                        <ScrollView style={{bottom: '10%', backgroundColor: '#72A2C0', height: '70%', width: '90%', position : 'absolute', borderRadius : 5, borderColor : 'black',borderWidth : 2}}>
                        <View>
                            <Text style={{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>List of reports</Text>
                            {this.state.reports.length ?
                                this.state.reports.map((report, key) => {
                                    return <ReportText
                                        title={report.title}
                                        longitude={report.longitude}
                                        latitude={report.latitude}
                                        date={report.date}
                                        key={key}
                                    />
                                }) : <Text>"No reports yet !"</Text>}</View>
                        </ScrollView>
                    }
                <View style={stylesList.footer}>
                    <TouchableOpacity onPress={this.props.showReports}>
                        <View style={stylesList.touchableButton}>
                            <Text style={stylesList.textStyle}> Back </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>{
                        API.getData().then((reports) => this.setState({reports}));
                    }}>
                        <View style={stylesList.touchableButton2}>
                            <Text style={stylesList.textStyle}> Refresh </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
                    )}
}

const ReportText = ({title, longitude, latitude, date}) =>
    <View style={{marginBottom: 20}}>
        <Text>{"Title : " + title}</Text>
        <Text>{"Longitude : " + longitude}</Text>
        <Text>{"Latitude : " + latitude}</Text>
        <Text>{"Date : " + date}</Text>
    </View>


const stylesList = StyleSheet.create({

    container:{
        flex: 1,
        width : '100%',
        backgroundColor: '#C2D3DA',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    boxStyle:{
        borderRadius : 5,
        borderWidth : 2,
        //margin: 10,
        borderColor : 'black',
        height : '50%',
        width : '80%',
        alignItems : 'center',
        position : 'absolute'

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
        alignItems: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center'

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
        //marginLeft: 20,
        //justifyContent: 'center'
    },
    touchableButton:{
        width: 160,
        backgroundColor: '#1D65A6',
        alignItems: 'center',
        height: 30,
        borderColor:'white',
        borderRadius:5,
        borderWidth: 2,
        marginLeft: 30

    },
    touchableButton2:{
        width: 160,
        backgroundColor: '#1D65A6',
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
