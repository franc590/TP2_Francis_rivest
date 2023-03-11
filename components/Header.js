import React from "react";
import {View, Text, StyleSheet} from "react-native";



export default class Header extends React.Component{
  render() {
    return(<>
        <View style = {styles.header}>
            <Text style = {styles.text}>Mon Catalogue</Text>
        </View>
    </>
    )
  }
}

  
const styles = StyleSheet.create({
    header: {
        display:"flex",
        backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center",
        marginBottom:40,
        height:100
    },
    text: {
        color:"white",
        fontWeight:"500",
        fontSize:30
    },
})