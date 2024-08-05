import React from 'react';
import { Text, TextInput, View } from "react-native";
import { style } from "./textInput.style";
import { COLORS } from "../../constants/theme/theme";

function TextInputComponente(props) {
    return (
        <View style={style.container}>
            {props.label && <Text style={style.labelText}>{props.label}</Text>}
            <TextInput
                style={style.input}
                placeholder={props.placeholder}
                placeholderTextColor={COLORS.black}
                onChangeText={props.onChange} // Corrigido para passar a função corretamente
                value={props.value} // Adicionado para permitir a atualização do valor
            />
        </View>
    );
}

export default TextInputComponente;
