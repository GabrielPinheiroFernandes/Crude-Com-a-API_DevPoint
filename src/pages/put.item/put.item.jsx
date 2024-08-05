import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { style } from "./put.item.style";
import TextInputComponente from "../../components/textInput/textInput";
import { COLORS } from "../../constants/theme/theme";
import { Dropdown } from "react-native-element-dropdown";
import Button from "../../components/button/button";
import { useNavigation } from "@react-navigation/native";
import { API_DOMAIN } from "../../constants/API/api";

function PutItem({ route }) {
    const navigation = useNavigation();

    const dados = [
        { label: 'Sim', value: 'S' },
        { label: 'Não', value: 'N' },
        { label: "Selecione uma opção", value: '' },
    ];

    const put_item = route.params.item;

    const [selectedValue, setSelectedValue] = useState(put_item.concluido);
    const [desc, setDesc] = useState(put_item.descricao);

    useEffect(() => {
        setSelectedValue(put_item.concluido);
        setDesc(put_item.descricao);
    }, [route.params.item]); // Atualiza quando route.params.item mudar

    const ConfirmPut = () => {
        // console.log('ID:' + put_item.id_tarefa);
        // console.log('Descrição:' + desc);
        // console.log('Selected value:' + selectedValue);
        fetch(API_DOMAIN + "tarefas/"+put_item.id_tarefa, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                descricao: desc,
                concluido: selectedValue
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Navega para a tela 'Get' após a inserção
            
            navigation.navigate('Get');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <>
            <View style={style.container}>
                <TextInputComponente 
                    label="Descrição" 
                    value={desc} 
                    onChange={setDesc} // Corrigido para onChangeText
                />
                <Dropdown 
                    data={dados}
                    labelField="label"
                    valueField="value"
                    placeholder="Selecione uma opção"
                    value={selectedValue}
                    onChange={item => {
                        setSelectedValue(item.value);
                    }}
                    style={{ 
                        marginTop: 20, 
                        borderWidth: 1, 
                        borderColor: COLORS.bright_orange, 
                        borderRadius: 5, 
                        padding: 10,
                        backgroundColor: COLORS.pale_orange,
                    }}
                    containerStyle={{
                        backgroundColor: '#fff',
                        padding: 5,
                        borderRadius: 5
                    }}
                    selectedTextStyle={{
                        color: '#000',
                        fontSize: 16
                    }}
                    placeholderStyle={{
                        color: '#aaa',
                        fontSize: 16
                    }}
                    itemTextStyle={{
                        color: '#000',
                        fontSize: 16
                    }}
                />
            </View>
            <Button texto="EDITAR" onPress={ConfirmPut} />
        </>
    );
}

export default PutItem;
