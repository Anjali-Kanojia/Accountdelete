import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {clickContext} from './clickcontext';

function CommonButton({onPressContinue,onPressBack}) {
  const {disabled} = useContext(clickContext);

  return (
    <View style={styles.btncontainer}>
      <TouchableOpacity
        style={styles.backbtn}
        onPress={onPressBack}>
        <Text style={styles.txt}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={disabled}
        style={{
          ...styles.cancelbtn,
          borderColor: disabled ? '#F5F0E2' : '#F9572B',
          borderWidth: disabled ? 0 : 1,
        }}
        onPress={onPressContinue}>
        <Text style={{...styles.txt, color: disabled ? '#B7B7B7' : '#F9572B'}}>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  btncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 660,
  },
  backbtn: {
    backgroundColor: '#F9572B',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: 145,
    height: 60,
  },
  cancelbtn: {
    backgroundColor: '#00000014',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: 145,
    height: 60,
    marginLeft:20,
  },
  txt: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 14,
  },
});

export default CommonButton;
