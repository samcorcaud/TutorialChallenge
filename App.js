import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ReportView } from './Components/ReportView';
import { ListOfReports } from './Components/ListOfReports';

/**
 * This class control all the components of the application.
 * The App class display the current screen of the application, she store and set the state of the current Page.
 */
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentPage: 'ReportView' };
        this.showList = this.showList.bind(this);
        this.showReports = this.showReports.bind(this);
    }

    /**
     * Set the state of the current page to "ReportView".
     */
    showReports() {
        this.setState({
            currentPage: 'ReportView'
        });
    }

    /**
     * Set the state of the current page to "List"
     */
    showList() {
        console.log(this.state);
        this.setState({
            currentPage: 'List'
        });
    }

    render() {
        if (this.state.currentPage === 'ReportView') {
            return (
                <View style={styles.container}>
                    <ReportView showList={this.showList}/>
                </View>
            );
        } else if (this.state.currentPage === 'List') {
            return (
                <View style={styles.container}>
                    <ListOfReports showReports={this.showReports}/>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
