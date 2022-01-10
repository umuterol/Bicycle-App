import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BicyclesTransactionsScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Bicycles Transactions Pages!</Text>
        </View>
    )
}

export default BicyclesTransactionsScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
