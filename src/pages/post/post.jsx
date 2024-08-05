import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import TextInputComponente from "../../components/textInput/textInput";
import Button from '../../components/button/button';
import { styles } from "./post.style";
import { Dropdown } from 'react-native-element-dropdown';
import { COLORS } from "../../constants/theme/theme";
import { useNavigation } from "@react-navigation/native";
import { API_DOMAIN } from "../../constants/API/api";

function Put() {
    const navigation = useNavigation();
    const [selectedValue, setSelectedValue] = useState(null);
    const [desc, setDesc] = useState('');

    const handleSubmit = () => {
        if (desc && selectedValue) {
            fetch(API_DOMAIN + "tarefas", {
                method: "POST",
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
        } else {
            console.log("Preencha todos os campos.");
        }
    };

    const dados = [
        { label: 'Sim', value: 'S' },
        { label: 'Não', value: 'N' },
        { label: "Selecione uma opção", value: '' },
    ];

    return <>
        <View style={styles.orangeBar}><Text>Adicionar novo registro</Text></View>
        <View style={styles.container}>
        

            <TextInputComponente 
                label='Descrição da tarefa:' 
                placeholder='Digite a descrição' 
                value={desc} 
                onChange={setDesc} // Corrigido para onChangeText
            />
            <View style={styles.ContainerlabelComboBox}>
                <Text style={styles.labelComboBox}>Concluído:</Text>
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
            </View>
            <View style={styles.containerBtn}>
                <Button 
                texto='Inserir no banco' 
                style={styles.btn} 
                onPress={() => {
                    // Aqui você pode verificar se os campos estão preenchidos antes de tentar enviar
                    if (desc && selectedValue) {
                        // Trigger useEffect by changing state values
                        setDesc(desc);
                        setSelectedValue(selectedValue);
                        handleSubmit();
                    } else {
                        console.log("Preencha todos os campos.");
                    }
                }}
                />
            </View>
    </>
}

export default Put;
