import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";

export default class ViewItemsScreen extends Component {
    render() {
    return (
      <View style={styles.container}>
        <View>
        <Text style={styles.title}>Enter The items that you need on daily basis.</Text>
        </View>
      
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: "#EEF6E9",
    alignItems: "center",
    justifyContent: "center",
    paddingTop:350,
    paddingBottom:400
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
    },
    title: {
      fontSize: 65,
      fontWeight: "300",
      paddingBottom: 30,
      color: "black",
    },
});