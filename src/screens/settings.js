import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../colours/colors';
import {globalStyles} from '../stylesheet/globalstyles';

function Settings({navigation}) {
 
  return (
    <View style={styles.mainContainer}>
      <Text style={globalStyles.idiotTxt}>Hello!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Screen1')}>
        <Text style={globalStyles.contentTxt}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.bgColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Settings;
