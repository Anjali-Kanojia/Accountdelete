import React from 'react'
import { View ,Text,StyleSheet} from 'react-native'
import { Colors } from '../colours/colors'

function Header() {
  return (
    <View style={styles.header}>
    <Text style={styles.deltxt}>Delete my Account</Text>
    <Text style={styles.cancel}>Cancel</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height:78,
        width:300,
        // padding:35,
        // backgroundColor:Colors.bgColor,
        // position:'absolute',
      
      },
      deltxt: {
        fontSize: 20,
        color: '#F9572B',
        fontWeight: 'bold',
        marginTop:30,
      },
      cancel:{
        fontSize:15,
        color:'#050404',
        marginTop:30
      },
})
export default Header