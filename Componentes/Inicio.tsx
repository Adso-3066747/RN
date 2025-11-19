import React, { useState } from "react";
import { TextInput,Text,View,ImageBackground  } from "react-native";
import estilos from "../Estilos/Style";
import {Picker} from '@react-native-picker/picker';


export default function Inicio(){
    const [miembro,setMiembro]=useState('')
    return(
         <ImageBackground
        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNLk1SNoMLccp1IsWnLgZBWU0tWpJORskiqqNXfoch9VwyI27XGa04QDhm3zX4oJQPJh0&usqp=CAU'}}
        resizeMode="stretch"
        style={estilos.Fondo}
        >
        <View 
        style={estilos.PI}
        >
            <Text style={estilos.text}>Usuario</Text>
            <TextInput style={estilos.textinput}/>
            <Text style={estilos.text}>Password</Text>
            <TextInput style={estilos.textinput}/>
            <Text style={estilos.text}>Membresia</Text>
            <Picker
            selectedValue={miembro}
            onValueChange={(itemValue)=>setMiembro(itemValue)}
            >
                <Picker.Item label="Usuario" value="Usuario" />
                <Picker.Item label="Miembro" value="Miembro" />
            </Picker> 
        </View>
        </ImageBackground>
    )
}
