import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/color'

const MealItem = props => {
    return <View style={styles.driveItem}>
        <View style={styles.driveHeader}>
            <ImageBackground style={styles.image} source={require("../assets/images/bisikletimolsun.png")}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title} numberOfLines={1}>{props.date}</Text>
                </View>
            </ImageBackground>
        </View>
        <View style={styles.driveDetail}>
            <Text>{props.pay}₺</Text>
            <Text>{props.minute}dk</Text>
            <View style={styles.detailBicycle}>
                <MaterialCommunityIcons name="bicycle-basket" size={24} color={Colors.primaryColor} />
                <Text style={{marginLeft:2}}>{props.bicycleId}</Text>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    driveItem: {
        width: '100%',
        height: 200,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10,
        borderBottomColor: Colors.accentColor,
        borderBottomWidth: 1,
    },
    driveHeader: {
        height: '85%',
    },
    driveDetail: {
        flexDirection: 'row',
        height: '15%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
    },
    titleContainer: {
        backgroundColor: Colors.primaryColor, //'rgba(0,0,0,0.5)',
        opacity: 0.8,
        paddingHorizontal: 12,
        paddingVertical: 5,
    },
    title: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18,
        textAlign: 'center',
    },
    detailBicycle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default MealItem;