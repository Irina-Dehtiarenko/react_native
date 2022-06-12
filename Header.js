import React from 'react';
import {
    StyleSheet,
    Text,
    View,

} from 'react-native';

const Header = (props) => {

    return (
        <View style={styles.view}>
            <Text style={styles.text}>
                React Native First App
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: 50,
        backgroundColor: '#00f',
        justifyContent: 'center'
    },
    text: {
        fontSize: 25,
        color: '#fff'
    }
})

export default Header;