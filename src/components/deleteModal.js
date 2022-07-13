import React, {useContext, useEffect} from 'react';
import {Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function DeleteModal({visible, onPressBack, onPressContinue}) {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
       <View style={styles.mainViewModal}>
        <View style={styles.modalContainerView}>
          <Text style={{...styles.txt,color:'#F9572B',marginTop:30}}>Delete my Account</Text>
         
          <Text style={{paddingHorizontal:10}}>This will permanently delete your account, click continue to proceed’</Text>
        
          {/* Button */}
          <View style={styles.btncontainer}>
            <TouchableOpacity style={styles.backbtn} onPress={onPressBack}>
              <Text style={styles.txt}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.backbtn,
                borderColor: '#F9572B',
                borderWidth: 1,
                marginLeft:10,
                backgroundColor: '#00000014',
              }}
              onPress={onPressContinue}>
              <Text
                style={{
                  ...styles.txt,
                  color: '#F9572B',
                }}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
          {/*  */}
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  mainViewModal: {
    backgroundColor: '#000000aa',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainerView: {
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal:20,
    marginHorizontal:40
  },
  btncontainer: {
    flexDirection: 'row',
    marginVertical:20
  },
  backbtn: {
    backgroundColor: '#F9572B',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 50,
  },
  txt: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 17,
  },
img:{
    height:100,
    width:100,
    position:'absolute'
}
});
export default DeleteModal;
