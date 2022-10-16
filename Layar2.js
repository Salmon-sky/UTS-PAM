import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';


  const Layar2 = ({navigation}) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('Not Yet Scanned');

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setText(data);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Meminta akses ke kamera</Text>;
    }

    if (hasPermission === false) {
        return <Text>Tidak dapat mengakses kamera</Text>;
    }

    return (
        <View style={styles.container}>
            <View style={styles.barcodBox}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={{ height: 400, width: 400 }}
                />
                <Text style={styles.mainText}>{text}</Text>
                {scanned &&
                    <Button
                        title='scan again'
                        onPress={() => setScanned(false)}
                    />
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "#D3D3D3",
    },
    barcodBox: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        width: 400,
        borderRadius: 30,
    },
    mainText: {
        fontSize: 16,
        margin: 20,
    },
});

export default Layar2;