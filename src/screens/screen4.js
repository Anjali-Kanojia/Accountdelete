import React, { useContext, useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../colours/colors'
import { globalStyles } from '../stylesheet/globalstyles'
import CommonButton from '../components/button'
import { clickContext } from '../components/clickcontext'
import Header from '../components/header'
import Logo from '../components/logo'

function Screen4({navigation}) {
    const {setDisabled} =useContext(clickContext)
    useEffect(()=>{
        setDisabled(false)
    },[])
  return (
      <View style={globalStyles.mainContainer}>
   <View style={globalStyles.delContainer}>
       <Header/>
       <Text style={globalStyles.idiotTxt}>Hi Idiot,</Text>
       <View style={styles.container}>
       <Text style={globalStyles.contentTxt}>
       We’re sorry to see you go!
       </Text>
       </View>
       <View style={styles.container}>
       <Text style={globalStyles.contentTxt}>
       Deleting your account will erase all your saved information. You will no longer be able to 
       access your account and your saved articles can’t be recovered. You will also miss out on the personalized 
       news updates from us
       </Text>
       </View>
       <View style={styles.container}>
       <Text style={globalStyles.contentTxt}>
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
       If you wish to enjoy your
       </Text>
       <View style={{flexDirection:'row'}}>
       <Text  style={globalStyles.contentTxt}>subscription till </Text>
       <Text style={{...globalStyles.idiotTxt,color:Colors.orange}}>26/01/2023</Text>
       <Text  style={globalStyles.contentTxt}> ,signup</Text>
       </View>
       <View style={{flexDirection:'row'}}>
       <Text  style={globalStyles.contentTxt}>again with </Text>
       <Text style={{...globalStyles.idiotTxt,color:Colors.orange}}>idiot@signmeupagain.com</Text>
       </View>
       </View>
    <CommonButton  onPressContinue={() => navigation.navigate('Screen5')}
            onPressBack={() => navigation.goBack()}/>
   </View>
   </View>
  )
}

const styles=StyleSheet.create({
container:{
    marginTop:15
},

})
export default Screen4