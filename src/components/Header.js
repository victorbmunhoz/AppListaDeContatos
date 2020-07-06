import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

const Header = (props) => (
    <View style={style.container}>
        <Text style={style.title}>{ props.title }</Text>
    </View>
);

const style = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: '#c4fb6d',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 60,
        marginHorizontal: 20
    },
    title: {
        fontSize: 40,
        color: '#393e46',
        fontFamily: 'sans-serif-medium'
    }
});

export default Header;