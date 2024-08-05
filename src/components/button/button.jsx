import { Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style";

function Button(props) {
    return (
        <TouchableOpacity 
            style={styles.btn} 
            onPress={props.onPress} // Correção aqui
        >
            <Text style={styles.texto}>{props.texto}</Text>
        </TouchableOpacity>
    );
}

export default Button;
0