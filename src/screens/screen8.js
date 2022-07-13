import React, { useEffect, useState } from 'react'
import {View, Text, StyleSheet, TextInput ,TouchableOpacity, Alert,TouchableWithoutFeedback,Keyboard,KeyboardAvoidingView} from 'react-native'
import Header from '../components/header'

function Screen8() {
   const [disabled,setDisabled]=useState(true)
   const [inputVal,setInputVal]=useState('')

useEffect(()=>{
    if(inputVal == ''){
        setDisabled(true)
    }else{
        setDisabled(false)
    }
})
  return (
    // <KeyboardAvoidingView>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.mainContainer}>
   <View style={styles.viewContainer}>
       <View>
      <Header/>
      <View style={styles.container}>
      <Text style={styles.txt}>An OTP code has been send  to </Text>
      <View style={styles.row}>
      <Text style={styles.num}>+91 9999966666</Text>
      <Text style={styles.txt}>, please enter code</Text>
      </View>
      <Text style={styles.txt}>below</Text>
      <TextInput placeholder='Enter OTP' style={styles.txtinput}  onChangeText={(val)=> setInputVal(val)} value={inputVal} keyboardType='numeric'/>
      <View style={{...styles.row,marginTop:10}}>
      <Text style={{...styles.txt,fontSize:14}}>Resend OTP </Text>
      <Text style={{...styles.num,fontSize:14,color:'#000000'}}> In 60 Seconds</Text>
      </View>
      <TouchableOpacity
        disabled={disabled}
        style={{
          ...styles.cancelbtn,
          backgroundColor: disabled  ? '#F5F0E2' : '#F9572B',
        }}
        onPress={()=> Alert.alert('OTP Verified')}>
        <Text style={{...styles.txt2, color: disabled ? '#B7B7B7' : '#FFFFFF'}}>
          Verify OTP
        </Text>
      </TouchableOpacity>
    
      </View>
      </View>
   </View>
    </View>
    </TouchableWithoutFeedback>
    // </KeyboardAvoidingView> 
  )
}
const styles=StyleSheet.create({
    num:{
        fontSize:17,
        fontWeight:'bold',
        color:'#505050'
    },
    txt:{
        fontSize:17,
        color:'#505050',
    },
    container:{
        alignItems:'center',
        marginTop:120,

    },
    txtinput:{
        backgroundColor:'#EDEDED',
        borderColor:'#EAEAEA',
        borderWidth:1,
        height:48,
        width:295,
       textAlign:'center'
    },
    row:{
        flexDirection:'row'
    },
    cancelbtn: {
        backgroundColor: '#00000014',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width: 145,
        height: 60,
        marginTop: 250,
      },
      txt2: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 14,
      },
      mainContainer:{
          backgroundColor:'#FDFAF2',
          flex:1
        },
      viewContainer:{
          height:27,
          width:295,
          marginHorizontal:40
        },
      
})
export default Screen8