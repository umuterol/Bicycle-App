import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const WalletTransactionScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Wallet Transactions Pages!</Text>
        </View>
    )
}

export default WalletTransactionScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
