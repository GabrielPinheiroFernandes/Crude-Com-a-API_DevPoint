import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from "./put.style";
import { COLORS } from "../../constants/theme/theme";
import { API_DOMAIN } from "../../constants/API/api";

// import styles from './put.style'



function Post(){
    const navigation = useNavigation();    

    
    const [dadosApi, setDadosApi] = useState([]);
    useFocusEffect(
        React.useCallback(() => {
          const fetchData = () => {
            fetch(API_DOMAIN + "tarefas")
              .then(response => response.json())
              .then(data => {
                setDadosApi(data);
                // console.log(dadosApi)
              })
              .catch(error => {
                console.error('Error fetching data:', error);
              });
          };
    
          fetchData();
    
          return () => {
            // Limpeza, se necessário, quando a tela perde o foco
          };
        }, [])
      );

      
    return <>
        <View style={styles.container}>
            <FlatList
                style={styles.flatlist}
                data={dadosApi}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('PutItem',{item:item})}>
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
                    </TouchableOpacity>
                )}
            />
        </View>
    </>
}

export default Post;