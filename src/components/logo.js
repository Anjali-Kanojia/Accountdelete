import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

function Logo() {
  return (
    <View style={styles.logoContainer}>
        <Image source={{uri:'https://www.hindustantimes.com/res/images/logo.png'}} style={styles.img}/>
        <Image source={{uri:'https://www.hindustantimes.com/res/images/logo.png'}} style={styles.img}/>
        <Image source={{uri:'https://www.hindustantimes.com/res/images/logo.png'}} style={styles.img}/>
        <Image source={{uri:'https://www.hindustantimes.com/res/images/logo.png'}} style={styles.img}/>
        <Image source={{uri:'https://www.hindustantimes.com/res/images/logo.png'}} style={styles.img}/>
    </View>
  )
}
const styles=StyleSheet.create({
    logoContainer:{
        flexDirection:'row',
        height:48,
        marginVertical:15,
        justifyContent:'space-between'
    },
    img:{
        height:48,
        width:48,
        borderRadius:50
    }
})
export default Logo