import { StyleSheet } from "react-native";
import { COLORS, FONTSIZE } from "../../constants/theme/theme";

export const style = StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:COLORS.dark_orange,
        borderRadius:6,
        padding:4,
        backgroundColor:COLORS.white
    },
    input:{
        backgroundColor:COLORS.pale_orange,
        borderWidth:1,
        borderColor:COLORS.bright_orange,
        paddingLeft:15,
        fontSize:FONTSIZE.md,
        borderRadius:2,

    },
    labelText:{
        color:COLORS.bright_orange,
        paddingLeft:4,
        fontSize:FONTSIZE.lg,
        paddingBottom:5
    }
})