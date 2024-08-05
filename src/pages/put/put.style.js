import { StyleSheet } from "react-native";
import { COLORS, DARKTHEME } from "../../constants/theme/theme";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: DARKTHEME.surface,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth:3,
      // gap:10,
      width:"100%"
      
    },
    containerData:{
      padding:10,
      borderBottomWidth:2,      
      borderColor:COLORS.dark_orange,
    },
    textDataDesc:{
      fontSize:15,
      color:COLORS.white

    },
    textDataStatus:{
      fontSize:10
    },
    flatlist:{
      // paddingTop:50
      width:"100%"

    },
    tarefa:{
      color:COLORS.bright_orange
    }
  });
  