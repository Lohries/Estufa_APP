import React from "react";
import { StyleSheet, Text, View, ImageBackground, Button} from "react-native";
import background from "../assets/back6.jpeg";

const Configuration = ({ }) => { 
    return(
        <ImageBackground source={background} style={styles.container}>

        </ImageBackground>
    )
} 


export default Configuration;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        resizeMode: "contain",
        justifyContent: "center",
        width: "100%", 
        height: "100%", 
    }
});

