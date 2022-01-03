import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import BiscycleMarker from "./BicycleMarker";

const latitudeDelta = 0.005;
const longitudeDelta = 0.005;
const Map = props => {
    const { latitude, longitude } = props.userLocation;
    const initialRegion = {
        latitude,
        longitude,
        latitudeDelta,
        longitudeDelta,
    }

    return <MapView
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation={true}
        showsMyLocationButton={true}
        userLocationPriority="high"
        mapType="terrain"
        provider="google"
        mapPadding={{
            top: 25,
            bottom: 25,
            right: 10,
            left: 10,
        }}
    >
        <BiscycleMarker
            coordinate={{
                latitude: 36.5775991 + 0.0004,
                longitude: 36.1601671,
            }}
            onSelectBicycle={props.onSelectBicycle}
            bicycle={{ id: '#1F2C', price: '0,55' }}
        />

        <BiscycleMarker
            coordinate={{
                latitude: 36.5775991 + 0.0014,
                longitude: 36.1609671,
            }}
            onSelectBicycle={props.onSelectBicycle}
            bicycle={{ id: '#777C', price: '0,55' }}
        />

    </MapView>

}

export default Map;

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    }
})