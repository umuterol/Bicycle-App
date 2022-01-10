import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Colors from '../constants/color'
import Button from './Button'
import { AntDesign } from '@expo/vector-icons';

const WalletCard = (props) => {
    return (
        <View style={styles.card}>
            <View style={styles.priceContainer}>
                <Text style={styles.text}>{props.balance}₺</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button onSelect={props.onSelect}>
                    <AntDesign name="arrowright" size={24} color="black" />
                </Button>
            </View>
        </View>
    )
}

export default WalletCard

const styles = StyleSheet.create({
    card: {
        height: 200,
        backgroundColor: Colors.primaryColor,
        borderRadius: 10,
    },
    text: {
        fontFamily: 'open-sans-bold',
        color: '#fff',
        fontSize: 40,
    },
    priceContainer: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    }
})
