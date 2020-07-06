import React from 'react';
import { View, Text, StyleSheet, Image, TouchableNativeFeedback } from 'react-native';
import capitalizeFirstLetter from '../útil/capitalizeFirstLetter'



const PeopleListItem = props => {
    const { people, navigateToPeopleDetail } = props;
    const { first, last, title } = people.name;
    return(
        <TouchableNativeFeedback onPress={ () => {
            console.log('Clicou em mim' + first)
            navigateToPeopleDetail({ people });
        }}>
            <View key={ first } style={styles.line}>
                <Image style={styles.avatar} source={{ uri: people.picture.thumbnail }} />

                <Text style={styles.lineText}>
                    { `${
                        capitalizeFirstLetter(title)
                    } ${
                        capitalizeFirstLetter(first)
                    } ${
                        capitalizeFirstLetter(last)
                    } `}
                </Text>
            </View>
        </TouchableNativeFeedback>
    );
}

export default PeopleListItem;

const styles = StyleSheet.create({
    line:{
        height: 70,
        borderBottomWidth: 2,
        borderBottomColor: '#c4fb6d',
        alignItems: 'center',
        flexDirection: 'row',
    },
    lineText:{
        color: '#393e46',
        fontSize: 20,
        paddingLeft: 25,
        flex: 7
    },
    avatar: {
        aspectRatio: 1,
        marginLeft: 15,
        borderRadius: 15,
        flex: 1.15
    }
})