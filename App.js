import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

const App = () => {

  const [name, SetName] = useState('');
  const [submit, setSubmit] = useState(false)

  const onPressHandler = () => {
    console.log(submit)
    setSubmit(!submit);
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Please write your name:
      </Text>
      <TextInput
        style={styles.input}
        placeholder='write name'
        onChangeText={(value) => SetName(value)}
      //multiline - wieloliniowy
      //keyboardType='numerric' - tylko cyfry wpisuje
      //maxLength={6}//długość max
      // value={'To jest wartość inputa'}
      // editable={false} - edytować imput value
      //secureTextEntry //hasła
      />
      <Button
        title={submit ? 'Clear' : 'Submit'}
        onPress={onPressHandler}
        color='#00f'
      //disabled={submit}//przycisk niedostępny
      />
      <Text style={styles.text}>
        You are registred as {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
  },
});

export default App;