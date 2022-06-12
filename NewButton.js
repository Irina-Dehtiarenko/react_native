import React from 'react';
import {
    StyleSheet,
    Text,
    Pressable,

} from 'react-native';


// Tworzymy nowy własny komponent
const NewButton = (props) => {
    return (


        // {/* Wariant przycisku 4 - najlepszy, ponieważ możemy zmieniać jak długo musi użytkownik wciskać ten przycisk, zanim się wykona jakaś funkcja */ }


        < Pressable
            style={({ pressed }) => [
                { backgroundColor: pressed ? '#ddd' : '#0f0' }, styles.button,
                { ...props.style }
            ]}
            //za pomocą wrzucania  takiej funkcii możemy osobno zmieniać jakieś style za pomocą kodu JS
            //również można użuwać onPress
            onLongPress={props.onPressFunction}
            // Płynny przycisk
            delayLongPress={300}
            //długość wciskania przycisku
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
        //rozszerza przestrzeń kliknięcia poza ramki buttona
        >
            <Text style={styles.text}>
                {/* {submit ? 'Crear' : 'Submit'} */}
                {props.title}
            </Text>
        </Pressable >
    )
}

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

    button: {
        width: 150,
        height: 50,
        alignItems: 'center',


    },


});


export default NewButton;