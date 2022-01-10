import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/color'
import Button from './Button'

const BicycleDetails = (props) => {
    return (
        <View style={{ marginVertical: 20 }}>
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <View style={styles.icon}>
                        <Text style={styles.textId}>{props.id}</Text>
                        <MaterialCommunityIcons name="bicycle-basket" size={50} color="white" />
                    </View>
                </View>
                <View style={styles.detailsContainer}>
                    <View style={styles.detailItem}>
                        <Text style={styles.title}>price: </Text>
                        <Text style={styles.text}>{props.price}₺</Text>
                    </View>
                    <View style={styles.detailItem}>
                        <Text style={styles.title}>Toplam Kazanç: </Text>
                        <Text style={styles.text}>{props.totalEarn}₺</Text>
                    </View>
                    <View style={styles.detailItem}>
                        <Text style={styles.title}>Senin Kazancın: </Text>
                        <Text style={styles.text}>{props.userEarn}₺</Text>
                    </View>
                    <View style={styles.detailItem}>
                        <Text style={styles.title}>Çekilen Kazanç: </Text>
                        <Text style={styles.text}>{props.withdraw}₺</Text>
                    </View>
                    <View style={styles.detailItem}>
                        <Text style={styles.title}>Çekilebilir Kazanç: </Text>
                        <Text style={styles.text}>{props.allowWithdraw}₺</Text>
                    </View>
                </View>
            </View>
            <View style={styles.button}>
                <Button>Tüm Kazancı çek</Button>
            </View>
        </View>
    )
}

export default BicycleDetails

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    icon: {
        backgroundColor: Colors.primaryColor,
        width: 100,
        height: 100,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        // width: '40%'
    },
    detailsContainer: {
        width: '50%',
        paddingTop: 5,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 15,
        color: '#ccc'
    },
    text: {
        fontFamily: 'open-sans',
    },
    textId: {
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.3)',
        paddingVertical: 1,
        paddingHorizontal: 5,
        fontFamily: 'open-sans',
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 1,
    },
    button: {
        marginTop: 10,
    }

})
