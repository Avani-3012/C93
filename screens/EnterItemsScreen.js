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

export default class EnterItemsScreen extends Component {
  render() {
    return (
      <View>
      <View style={styles.container}>
        <Text style={styles.title}>Enter Your Essential Item</Text>
      </View>
      <View>
        <TextInput
          style={styles.formTextInput}
          placeholder="Enter Your Food Item"
          />
            <TextInput
          style={styles.formTextInput}
          placeholder="Enter The Number Of Members in your family"
          />
           <TextInput
          style={styles.formTextInput}
          placeholder="Enter The Quantity Of Your Food Item"
          />
            <TextInput
          style={styles.formTextInput}
          placeholder="When did you purchase it?"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={{fontColor:'black'}}>SAVE</Text>
          </TouchableOpacity>
      </View>

     
    </View>
    

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#62C4DC",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 10,
  },
  title: {
    fontSize: 65,
    fontWeight: "300",
    paddingBottom: 30,
    color: "black",
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#62C4DC',
    borderRadius:10,
    borderWidth:3,
    marginTop:20,
    padding:10,
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    borderWidth:3,
    backgroundColor:"#62C4DC",
    shadowColor: "#000",
    marginLeft:200,
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
    },
   
});

