import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {deleteItems} from '../JSONfiles.js/deleteItems';
import CommonButton from './button';
import Header from './header';
import Item from './item';

function Home1({navigation}) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.bgColorView}>
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <Header />
            </View>
            <ScrollView style={{height:'75%'}} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
            <Text style={{...styles.txt}}>
              Kindly confirm your reason for deletion
            </Text>
          </View>
          <KeyboardAvoidingView behavior="position">
              {deleteItems.map((item)=>(
                  <Item item={item} />
              ))}
            {/* <FlatList
              data={deleteItems}
              keyExtractor={item => item.id}
              renderItem={({item}) => <Item item={item} />}
            /> */}
          </KeyboardAvoidingView>
          </ScrollView>
          <CommonButton
            onPressContinue={() => navigation.navigate('Otp')}
            onPressBack={() => console.log('Back Action')}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#505050',
  },
  mainContainer: {
    marginHorizontal: 30,
  },
  container: {
    marginHorizontal: 10,
  },
  bgColorView: {
    backgroundColor: '#FDFAF2',
    flex:1
  },
});

export default Home1;
