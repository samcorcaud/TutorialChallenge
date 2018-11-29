import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {ReportView} from "./Components/ReportView";
import {ListOfReports} from "./Components/ListOfReports";
import {Test} from "./Components/Test";

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {currentPage : "RapportView"};
    this.showList = this.showList.bind(this);
    this.showReports = this.showReports.bind(this);
  }

  showReports(){
    this.setState({
        currentPage: "RapportView"
    })
  }

  showList(){
    console.log(this.state)
    this.setState({
        currentPage: "List"
    })
  }

  render() {
    if(this.state.currentPage === "RapportView"){
      return(
          <View style={styles.container}>
              <ReportView showList = {this.showList}/>
          </View>
      );
    }else if(this.state.currentPage === "List"){
        return (
            <View style={styles.container}>
                <ListOfReports showReports = {this.showReports}/>
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
