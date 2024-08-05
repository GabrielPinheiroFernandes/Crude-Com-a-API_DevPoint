import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, FlatList } from 'react-native';
import { styles } from './get.style';
import { useFocusEffect } from '@react-navigation/native';
import { COLORS } from '../../constants/theme/theme';
import { Dropdown } from 'react-native-element-dropdown';
import { API_DOMAIN } from '../../constants/API/api';

export default function Get() {
  const [selectedValue, setSelectedValue] = useState('');
  const [dadosApi, setDadosApi] = useState([]);

  const dados = [
    { label: 'Sim', value: 'S' },
    { label: 'Não', value: 'N' },
    { label: "Selecione uma opção", value: '' },
  ];

  const fetchData = useCallback((value) => {
    
    const url = value ? API_DOMAIN+`tarefas/concluido="${value}" ` :  API_DOMAIN+"tarefas";
    // console.log(value)
    // console.log(url)
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setDadosApi(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchData(selectedValue);
      return () => {
        // Limpeza, se necessário, quando a tela perde o foco
      };
    }, [fetchData, selectedValue])
  );

  useEffect(() => {
    fetchData(selectedValue);
  }, [selectedValue, fetchData]);

  return (
    <View style={styles.container}>
      <View style={styles.filtros}>
        <View style={styles.orangeBar}><Text>Filtros</Text></View>
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
              // console.log(item.value)
              fetchData(item.value);
            }}
            style={{ 
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
              fontSize: 10
            }}
            placeholderStyle={{
              color: '#aaa',
              fontSize: 10
            }}
            itemTextStyle={{
              color: '#000',
              fontSize: 10
            }}
          />
        </View>
      </View>
      <View style={styles.orangeBar}><Text>DATA</Text></View>
      <FlatList
        style={styles.flatlist}
        data={dadosApi}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.containerData}>
            <Text style={styles.textDataDesc}><Text style={styles.tarefa}>Tarefa:</Text> {item.descricao}</Text>
            <Text
              style={[
                styles.textDataStatus,
                item.concluido === "S" ? { color: COLORS.success } : { color: COLORS.danger }
              ]}
            >
              Status: {item.concluido === 'S' ? 'Concluída' : item.concluido === 'N' ? 'Não Concluída' : 'N/A'}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
