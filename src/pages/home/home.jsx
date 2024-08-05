import { Text, View } from "react-native";
import { style } from "./home.style";
import Button from "../../components/button/button";
import { useNavigation } from "@react-navigation/native";


function Home(){
    const navigation = useNavigation();
    return <>
        <View style={style.container}>
            <View style={style.containerData}>
                <Text style={style.text}>Bem Vindo</Text>
                <Button texto="Ir para o GET -->" onPress={()=>{ navigation.navigate('Get') }}/>
            </View>
        </View>
    
    </>
}

export default Home;