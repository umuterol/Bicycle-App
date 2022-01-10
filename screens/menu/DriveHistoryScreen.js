import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DriveHistoryScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>DriveHistoryScreen Pages!</Text>
        </View>
    )
}

export default DriveHistoryScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
