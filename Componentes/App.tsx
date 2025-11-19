import 'react-native-gesture-handler'; 
import React from "react";
import Inicio from "./Inicio";
import Tablero from "./Tablero";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native"
import { enableScreens } from 'react-native-screens';

enableScreens()
export type RootStackParamList={
    Inicio:undefined
    Tablero:undefined
}
const Stack=createStackNavigator<RootStackParamList>()

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="Inicio"
            >
            <Stack.Screen
            name="Tablero"
            component={Tablero}
            />
            <Stack.Screen
            name="Inicio"
            component={Inicio}
            />
            </Stack.Navigator>

        </NavigationContainer>
    )
}