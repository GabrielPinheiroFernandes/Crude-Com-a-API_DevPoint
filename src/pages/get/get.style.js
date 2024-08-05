import { StyleSheet } from "react-native";
import { COLORS, DARKTHEME, FONTSIZE } from "../../constants/theme/theme";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: DARKTHEME.surface,
      // alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth:3,
      gap:6,
      
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
    },
    ContainerlabelComboBox:{
      borderRadius:3,
      backgroundColor:COLORS.white,
      borderWidth:2,
      borderColor:COLORS.dark_orange,
      padding:5,
      width:'100%',
      
      
    },
    labelComboBox:{
      color:COLORS.bright_orange,
      fontSize:FONTSIZE.md,
      borderRadius:3,
      backgroundColor:COLORS.white,
    },
    orangeBar:{
      backgroundColor:COLORS.dark_orange,
      height:40,
      alignItems:'center',
      justifyContent:'center'
    },
    filtros:{
      gap:3
    }
  });
  