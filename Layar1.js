import React, {useState} from "react";
import { Touchable, TouchableOpacity, ViewBase, Image, StyleSheet, Text, View, Button,  } from "react-native";
import  QRCode  from "react-native-qrcode-svg";

const App = ({navigation}) => {

    const[input, setInput] = useState('');
    const [qrvalue, setQrValue] = useState('');

    return (
        <View style={styles.container}>
           <Image style={styles.Image}
           source={require("./assets/qrcode.jpeg")}/>
           <TouchableOpacity onPress={() => navigation.navigate("Layar2")}>
            <View style={styles.buttonContainer}>
                <Text style={styles.textDefault}>QR Scanner</Text>
            </View>
            </TouchableOpacity>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D3D3D3',
      justifyContent: "space-around",
      alignItems: "center",
    },
    Image: {
     resizeMode: "contain",
     margin: 30,
     padding: 30,
     width: 312,
     height: 312,
    },
    buttonContainer: {
        backgroundColor: "black",
        padding: 20,
        borderRadius: 20, 

    },
    textDefault: {
        color: "white",
    }
  });

  export default App;