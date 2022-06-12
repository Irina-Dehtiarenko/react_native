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
  Image,
  ImageBackground,

} from 'react-native';
import NewButton from './NewButton';
//
const App = () => {

  const [name, SetName] = useState('');
  const [submit, setSubmit] = useState(false)

  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmit(!submit);
    }
    else {
      /*  Alert.alert('Warning', 'The name must be longer than 3 characters')
       //Taki sobie alert, który informuje o warunkach */

      ToastAndroid.show('The must be longer than 3 charakters', ToastAndroid.LONG)
      //albo SHORT, zalży jak długo to okienko powinno się wyświetlać
      //alert  na dole małe

    }
  }

  return (
    <View style={styles.body}
      // <ImageBackground style={styles.body}
      //działa jak tło Appki
      source={{ uri: 'https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_960_720.jpg' }}>



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


      {/* Wariant przycisku 1 */}


      {/* <Button
        title={submit ? 'Clear' : 'Submit'}
        onPress={onPressHandler}
        color='#00f'
      //disabled={submit}//przycisk niedostępny
      /> */}


      {/* Wariant przycisku 2 */}

      {/*  <TouchableOpacity style={styles.button}//zamiast przycisku
        onPress={onPressHandler}
        activeOpacity={0.1}>{//stopień przezroczystości }
        <Text style={styles.text}>
          {submit ? 'Crear' : 'Submit'}
        </Text>
      </TouchableOpacity>


 */}


      {/* Wariant przycisku 3 */}

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



      <NewButton
        title={submit ? "Clear" : "Submit"}
        onPressFunction={onPressHandler}
        //leci do objektu props
        style={{}}
      />

      {
        submit ? <View style={styles.body}>

          <Text style={styles.text}>
            You are registreted as {name}
          </Text>
          <Image
            source={require('./assets/done.png')}
            style={styles.image}
            resizeMode={'stretch'}
          />

        </View> :
          <Image
            source={require('./assets/error.png')}
            style={styles.image}
            resizeMode={'stretch'}
          />
      }
      {/* </ImageBackground> */}
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


  },
  image: {
    width: 100,
    height: 100,
    margin: 10,

  }

});

export default App;