import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
  Alert,
  ToastAndroid,
} from 'react-native';

const App = () => {

  const [name, SetName] = useState('');
  const [submit, setSubmit] = useState(false)

  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmit(!submit);
    }
    else {
      /*  Alert.alert('Warning', 'The name must be longer than 3 characters')
       //Raki sobie alert, który informuje o warunkach */

      ToastAndroid.show('The must be longer than 3 charakters', ToastAndroid.LONG)
      //albo SHORT, zalży jak długo to okienko powinno się wyświetlać
      //alert  na dole małe

    }
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




      {/* <Button
        title={submit ? 'Clear' : 'Submit'}
        onPress={onPressHandler}
        color='#00f'
      //disabled={submit}//przycisk niedostępny
      /> */}




      {/*  <TouchableOpacity style={styles.button}//zamiast przycisku
        onPress={onPressHandler}
        activeOpacity={0.1}>{//stopień przezroczystości }
        <Text style={styles.text}>
          {submit ? 'Crear' : 'Submit'}
        </Text>
      </TouchableOpacity>


 */}


      {/* 
      <TouchableHighlight
        style={styles.button}//zamiast przycisku
        onPress={onPressHandler}
        underlayColor={'#ddd'}>
        {//zamienia kolor w momencie naciskania}
        }
        <Text style={styles.text}>
          {submit ? 'Crear' : 'Submit'}
        </Text>
      </TouchableHighlight>
 */}



      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? '#ddd' : '#0f0' }, styles.button
        ]}
        onLongPress={onPressHandler}
        // Płynny przycisk
        delayLongPress={300}
        //prędkość naciskania
        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
      //rozszerza kliknięcie poza ramki buttona


      >
        <Text style={styles.text}>
          {submit ? 'Crear' : 'Submit'}
        </Text>
      </Pressable>

      {
        submit ? <Text style={styles.text}>
          You are registreted as {name}</Text> : null
      }
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
    marginBottom: 10,
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',


  }

});

export default App;