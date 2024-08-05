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
        
      },
      containerData:{
        padding:10,
        borderBottomWidth:2,      
        borderColor:COLORS.dark_orange,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        gap:10,
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
      trashIcon:{
        width:20,
        height:20,
      },
      orangeBar:{
        width:'100%',
        backgroundColor:COLORS.dark_orange,
        height:40,
        alignItems:'center',
        justifyContent:'center'
      },


})