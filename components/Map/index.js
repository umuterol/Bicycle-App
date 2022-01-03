import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import ActionBicycle from './ActionBicycle'
import { useDisclose } from 'native-base'
import locationPermission from '../../permissions/locationPermission'
import Map from './Map'
import Colors from '../../constants/color';

const index = () => {
    const [selectedBicycle, setSelectedBicycle] = useState("#fff");
    const { isOpen, onOpen, onClose } = useDisclose()
    const [location, setLocation] = useState(false);

    useEffect(async () => {
        const userLocation = await locationPermission();
        setLocation(userLocation.coords);
    },[])

    if (!location)
        return <View style={styles.screen}>
            <ActivityIndicator size="large" color={Colors.accentColor} />
        </View>;

    const mapSelectBicycleHandler = (bicycle) => {
        setSelectedBicycle(bicycle);
        onOpen();
    }

    return (
        <View style={styles.screen}>
            <Map
                userLocation={location}
                onSelectBicycle={mapSelectBicycleHandler}
            />
            <ActionBicycle
                isOpen={isOpen}
                onClose={onClose}
                selectedBicycle={selectedBicycle}
                startButton={() => { console.log("test start button") }}
            />
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
