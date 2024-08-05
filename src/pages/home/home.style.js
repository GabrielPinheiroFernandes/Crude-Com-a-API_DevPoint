import { StyleSheet } from "react-native"
import { COLORS, DARKTHEME, FONTSIZE } from "../../constants/theme/theme"

export const style = StyleSheet.create({
    container:{
        backgroundColor:DARKTHEME.surface,
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        
    },
    text:{
        color:COLORS.white,
        fontSize:FONTSIZE.lg
        
    },
    containerData:{
        justifyContent:"center",
        alignItems:"center",
        borderWidth:3,
        borderColor:COLORS.dark_orange,
        padding:100,
        borderRadius:10,
        gap:10,
    }
})