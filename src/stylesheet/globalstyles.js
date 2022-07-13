import { StyleSheet } from "react-native";
import { Colors } from "../colours/colors";

export const globalStyles=StyleSheet.create({
    delContainer:{
        marginHorizontal:25
    },
    mainContainer:{
        backgroundColor:Colors.bgColor,
        flex:1,
    //    backgroundColor:'pink'
    },
    idiotTxt:{
        color:'#505050',
        fontSize:17,
        fontWeight:'bold',
    },
    contentTxt:{
        fontSize:17,
        color:Colors.textColor
    }
})