import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

//Screens
import AccessScreen from './screens/login/AccessScreen'
import VerifyCodeScreen from './screens/login/VerifyCodeScreen'
import MapScreen from './screens/map/MapScreen'


export default Navigasyon = props => {
    return <NavigationContainer>
        <Stack.Navigator screenOptions={
            {
                headerShown: false, contentStyle:
                    { backgroundColor: 'white' },
            }}
        >
            <Stack.Screen component={AccessScreen} name="AccessScreen" />
            <Stack.Screen component={VerifyCodeScreen} name="VerifyScreen" />
            <Stack.Screen component={MapScreen} name="MapScreen" />
        </Stack.Navigator>
    </NavigationContainer >
}