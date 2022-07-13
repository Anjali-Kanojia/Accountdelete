import React, { useContext } from 'react'
import { View,Text,TouchableOpacity,StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native'
import { clickContext } from './clickcontext'

function DeletedItem({item,onPress,borderColor,borderWidth,color,fontWeight}) {
   const {shouldShow}=useContext(clickContext)
// console.log(item);
// console.log('-----------',key);
  return (
    <View style={[styles.container, borderColor, borderWidth]} >
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.txt, color,fontWeight]}>{item.item}</Text>
        { item.item == ' Others' && shouldShow ?<>
        <TextInput placeholder='Pls specify your reason' multiline={true} editable={true} style={styles.textinput} />
        </>:null}
      </TouchableOpacity>
    </View>
  
  )
}
const styles=StyleSheet.create({
    container: {
        backgroundColor: '#F5F0E2',
        marginTop: 10,
      },
      txt: {
        fontSize: 14,
        paddingVertical: 15,
        paddingHorizontal: 10,
        color:'#000000',
      },
      textinput:{
         backgroundColor:'white',
         height:100,
         textAlignVertical:'top'
      }
})
export default DeletedItem