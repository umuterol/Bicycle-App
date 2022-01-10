import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import WalletCard from '../../components/WalletCard'
import { useSelector } from 'react-redux'
import MenuList from '../../components/MenuList'
//helpers
import { getWallet } from '../../helpers/wallets'

const MenuHome = (props) => {
    const [wallet, setWallet] = useState();
    const tc = useSelector(state => state.user)

    useEffect(async () => {
        setWallet(await getWallet(tc))
    }, [])

    if (!wallet) {
        return null;
    }

    return (
        <View style={styles.screen}>
            <WalletCard balance={wallet.balance} onSelect={() => props.navigation.navigate('WalletTransactionsScreen')} />
            <View style={styles.listContainer}>
                <MenuList navigation={props.navigation} />
            </View>
        </View>
    )
}

export default MenuHome

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
    },
    image: {
        width: 100,
        height: 100,
    },
    listContainer: {
        marginVertical: 20,
    }
})
