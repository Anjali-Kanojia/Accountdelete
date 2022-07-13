import React, { useContext, useEffect } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../colours/colors'
import { globalStyles } from '../stylesheet/globalstyles'
import CommonButton from '../components/button'
import { clickContext } from '../components/clickcontext'
import Header from '../components/header'
import Logo from '../components/logo'

function Screen3({navigation}) {
    const {setDisabled} =useContext(clickContext)
    useEffect(()=>{
        setDisabled(false)
    },[])
  return (
  <View style={globalStyles.mainContainer}>
     <View style={globalStyles.delContainer}>
     <Header/>
     <ScrollView style={{height:'75%'}} showsVerticalScrollIndicator={false}>
       <Text style={globalStyles.idiotTxt}>Hi Idiot,</Text>
       <View style={styles.container}>
       <Text style={globalStyles.contentTxt}>
       We’re sorry to see you go!
       </Text>
       </View>
       <View style={{...styles.container,flexDirection:'row'}}>
       <Text style={globalStyles.contentTxt}>
       Your current subscription of
       </Text>
       <Text style={{...globalStyles.idiotTxt,color:Colors.orange}}> Livemint/ </Text>
       </View>
       <View style={{flexDirection:'row'}}>
       <Text style={{...globalStyles.idiotTxt,color:Colors.orange}}>Livemint+WSJ </Text>
       <Text style={globalStyles.contentTxt}>
       will expire on 
       </Text>
       </View>
       <Text style={{...globalStyles.idiotTxt,color:Colors.orange}}>26/01/2023.</Text>
       <View style={styles.container}>
       <Text style={globalStyles.contentTxt}>
       Deleting your account will erase all your saved information. 
       You will no longer be able to access your account and your saved articles, 
       history can’t be recovered. 
       </Text>
       </View>
       <View style={styles.container}>
       <Text style={globalStyles.contentTxt}>
       You will also miss out on the personalized news updates from us. 
       You will lose access to your 
       </Text>
       <View style={{flexDirection:'row'}}>
       <Text  style={globalStyles.contentTxt}>account from</Text>
       <Text style={{...globalStyles.idiotTxt,color:Colors.orange}}> Livemint/HT/LH</Text>
       </View>
       <Text style={globalStyles.contentTxt}>
       along with our below properties…
       </Text>
       </View>
        <Logo/>
        <View>
       <Text style={globalStyles.contentTxt}>
       If you wish to enjoy your subscription
       </Text>
       <View style={{flexDirection:'row'}}>
       <Text  style={globalStyles.contentTxt}>till </Text>
       <Text style={{...globalStyles.idiotTxt,color:Colors.orange}}>26/01/2023</Text>
       <Text  style={globalStyles.contentTxt}> ,signup again with </Text>
       </View>
       <Text style={{...globalStyles.idiotTxt,color:Colors.orange}}>idiot@signmeupagain.com</Text>
       </View>
       <View style={{flexDirection:'row',...styles.container}}>
         <Image source={{uri:'https://thumbs.dreamstime.com/b/speech-bubble-red-attention-sign-icon-new-message-alert-icon-attention-warning-attacker-alert-sign-exclamation-mark-beware-167095711.jpg'}} style={{height:22.5,width:23.33}}/>
        <Text style={styles.txt}>Please Note:</Text>
         </View>
         <Text style={{...globalStyles.contentTxt,fontSize:13}}>
         Account deletion will not cancel your subscription, in order to cancel your subscription, please go to Manage subscription tab under Account section.
         </Text>
       </ScrollView>
       <CommonButton  onPressContinue={() => navigation.navigate('Screen4')}
            onPressBack={() => navigation.goBack()}/>      
   </View>
   </View>
  )
}

const styles=StyleSheet.create({
container:{
    marginTop:15
},
txt:{
  fontSize:13,
  fontWeight:'bold',
  color:'#000000'
}

})
export default Screen3