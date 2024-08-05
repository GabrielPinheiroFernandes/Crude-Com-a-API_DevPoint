import { Alert, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { style, styles } from "./del.style";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { COLORS } from "../../constants/theme/theme";
import icons from "../../constants/theme/icons";
import { API_DOMAIN } from "../../constants/API/api";



function Del(){
    const navigation = useNavigation();

    const [dadosApi, setDadosApi] = useState([]);
    useFocusEffect(
        React.useCallback(() => {
          const fetchData = () => {
            fetch(API_DOMAIN+"tarefas")
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
                        
                            <View style={styles.containerData}>
                                <View>
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
                                <TouchableOpacity onPress={() => {
                                        fetch(API_DOMAIN + "tarefas/" + item.id_tarefa, {
                                            method: "DELETE",
                                            headers: {
                                                "Content-Type": "application/json"
                                            }
                                        })
                                        .then(response => {
                                            if (!response.ok) {
                                                throw new Error('Network response was not ok');
                                            }
                                            // Se você não precisa processar o corpo da resposta
                                            console.log('Success:', response.status);
                                            Alert.alert('Sucesso na exclusão !!')

                                            navigation.navigate('Get');
                                        })
                                        .catch((error) => {
                                            console.error('Error:', error);
                                        });
                                    }}>
                                    <Image style={styles.trashIcon} source={icons.trash} />
                                </TouchableOpacity>
                            </View>
                            
                
                    )}
                />
        </View>
    
    </>
}


export default Del;