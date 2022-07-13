import React, { useState } from 'react'
import { Text, View } from 'react-native'
import DeleteModal from '../components/deleteModal'
import SettingComp from '../components/settingComp'

function Screen1({navigation}) {
    const [visible,setVisible]=useState(false)
  return (
   <View>
      <SettingComp title='Email & Notification'/>
      <SettingComp title='Help & Support'/>
      <SettingComp title='Privacy Policy'/>
      <SettingComp title='Cookie Policy'/>
      <SettingComp title='Delete my Account' onPress={()=>setVisible(true)}/>
      <DeleteModal visible={visible} onPressBack={()=>setVisible(false)} onPressContinue={()=>navigation.navigate('Screen3')}/>
   </View>
  )
}

export default Screen1