import React from "react";
import { StyleSheet, Text, View, ImageBackground, Button} from "react-native";
import background from "../assets/back5.jpeg";

const Tips = ({ }) => { 
    return(
        <ImageBackground source={background} style={styles.container}>

        </ImageBackground>
    )
} 


export default Tips;

const styles = StyleSheet.create({
    
    container: {
        flex: 1, 
        resizeMode: "contain",
        justifyContent: "center",
        width: "100%", 
        height: "100%", 
    }
});



