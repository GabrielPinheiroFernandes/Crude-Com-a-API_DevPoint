import { StyleSheet } from "react-native";
import { COLORS, DARKTHEME, FONTSIZE } from "../../constants/theme/theme";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:10,
      backgroundColor:DARKTHEME.surface,
      gap:12,
      // borderWidth:7
      
    },
    containerData:{
      padding:10,
      borderBottomWidth:2,
      
    },
    textDataDesc:{
      fontSize:15
    },
    textDataStatus:{
      fontSize:10
    },
    flatlist:{
      // paddingTop:50
    },
    ContainerlabelComboBox:{
      borderRadius:3,
      backgroundColor:COLORS.white,
      borderWidth:2,
      borderColor:COLORS.dark_orange,
      padding:5,
      
    },
    labelComboBox:{
      color:COLORS.bright_orange,
      fontSize:FONTSIZE.lg,
      borderRadius:3,
      backgroundColor:COLORS.white,
    },
    btn:{
      paddingTop:50,
    },
    containerBtn: {     
      backgroundColor:DARKTHEME.surface,
      
    },
    orangeBar:{
      width:'100%',
      backgroundColor:COLORS.dark_orange,
      height:40,
      alignItems:'center',
      justifyContent:'center'
    },
  });
  