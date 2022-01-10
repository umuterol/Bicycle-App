import React, { useState, useEffect } from 'react'
import { StyleSheet, ActivityIndicator, View } from 'react-native'
import Map from '../../components/Map';
import { useSelector } from 'react-redux'
import Colors from '../../constants/color';
//helpers
import { getAllParkedBicyclesWithCoords } from '../../helpers/bicycles';

const MapScreen = props => {
    // useSelector(state => console.log(state.user + "mAP"))
    const [bicycles, setBicycles] = useState();

    useEffect(async () => {
        setBicycles(await getAllParkedBicyclesWithCoords())
    }, [])

    if (!bicycles) {
        return <View style={styles.screen}>
            <ActivityIndicator size={50} color={Colors.primaryColor} />
        </View>
    }
    return <Map parkedBicycles={bicycles} navigation={props.navigation} />
}

export default MapScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    }
})
