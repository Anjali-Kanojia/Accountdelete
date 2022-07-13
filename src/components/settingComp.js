import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function SettingComp({title,onPress}) {
  return (
   <TouchableOpacity style={styles.container} onPress={onPress}>
       <Text style={styles.txt}>{title}</Text>
       <Image source={{uri:'https://thumbs.dreamstime.com/z/help-support-contact-line-icon-vector-flat-editable-stroke-pixel-perfect-125040110.jpg'}} style={styles.img}/>
   </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
    img:{
        height:40,
        width:40,
        borderRadius:50
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        paddingVertical:15,
        borderBottomColor:'#0000005C',
        borderBottomWidth:1
    },
    txt:{
        color:'black',
        fontSize:14,
        paddingTop:10
    }
})
export default SettingComp