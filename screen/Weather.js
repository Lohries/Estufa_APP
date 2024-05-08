import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import background from "../assets/back4.jpeg";

const Weather = () => { 
    return(
        <ImageBackground source={background} style={styles.container}>
            <View style={styles.temperature}>
                <Text style={styles.text}>Temperature</Text>
            </View>
        </ImageBackground>
    )
} 

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        resizeMode: "contain",
        justifyContent: "center",
        width: "100%", 
        height: "100%", 
    },
    temperature: {
        flex: 1, 
        justifyContent: "center",
    },
    text: {
        fontSize: 25,
        textAlign: "center",
        color: "gray",
        fontWeight: "150",
    }
});
