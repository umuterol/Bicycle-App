import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import NumberTextInput from '../../components/NumberTextInput'
import Button from '../../components/Button'
import { showMessage } from "react-native-flash-message";

const VerifyCodeScreen = props => {
    const [value, setValue] = useState();
    const { verifyCode } = props.route.params;
    const changeText = (text) => {
        setValue(value);
        if (text === verifyCode) {
            props.navigation.replace('MapScreen')
        }
    }

    const approvalCode = () => {
        if (value === verifyCode) {
            return props.navigation.navigate('SuccessScreen')
        }
        showMessage({
            message: 'Doğrulama kodunuz hatalı !',
            type: 'danger',
        })
    }

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.input}>
                    <NumberTextInput
                        label="DOGRULAMA KODU"
                        // size={20}
                        value={value}
                        onChangeText={changeText}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        onSelect={approvalCode}
                    >DOĞRULA</Button>
                </View>
            </View>
        </View>
    )
}

export default VerifyCodeScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '80%',
        minWidth: 300,
        maxWidth: '90%',
    },
})
