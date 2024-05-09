import React from "react";
import { StyleSheet, Text, View, ImageBackground, Button} from "react-native";
import background from "../assets/back4.jpeg";

const Weather = ({ navigation }) => { 
    return(
        <ImageBackground source={background} style={styles.container}>
            <View style={styles.temperature}>
                <Text style={styles.text}>75°C</Text>
                <View style={styles.buttonWrapper}>
                    
                </View>
            </View>
            <View style={styles.data}>
                <View style={styles.spacer}></View>
                <View style={styles.dataWrapper}>
                    <View style={styles.humidity}>
                        <Text style={styles.dataText}>23%</Text>
                        <Text style={styles.title}>Humidity</Text>
                    </View>
                    <View style={styles.pressure}>
                        <Text style={styles.dataText}>0.5 ATM</Text>
                        <Text style={styles.title}>Pressure</Text>
                    </View>
                </View>
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
        fontSize: 150,
        textAlign: "center",
        color: "black",
        fontWeight: "100",
        paddingRight: 50,
        padding: 50,
        marginTop: 80
    },
    data: {
        flex: 1,
        textAlign: "center",
        justifyContent: "center",
        width: "100%",
    },
    spacer: {
        height: "30%"
    },
    dataWrapper:  {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        height: "20%",
        backgroundColor: "rgba(169, 227, 163, 1)",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "white",
        marginLeft: 50
    },
    humidity:  {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    pressure: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    dataText: {
        fontSize: 20,
        textAlign: "center",
        fontFamily: "Helvetica",
        color: "white",
        fontWeight: "200"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        fontFamily: "Helvetica"
    },
    buttonWrapper: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 20
    },
    button: {
        
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    }
});

