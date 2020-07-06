import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import PeopleListItem from './PeopleListItem'

const PeopleList = props => {
    const { peoples, onPressItem } = props;

    return(
        <FlatList 
            style={styles.container}
            data={peoples}
            renderItem={({ item }) => (
                <PeopleListItem 
                    people={item}
                    navigateToPeopleDetail={onPressItem} />
            )} 
            keyExtractor={item => item.name.first} 
        />
    );
}

export default PeopleList;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#eeeeee',
        color: '#eeeeee',
        marginTop: 30,
    },
    line:{
        height: 60,
        borderBottomWidth: 2,
        borderBottomColor: '#c4fb6d',
        justifyContent: 'center',
    },
    lineText:{
        color: '#393e46',
        fontSize: 20,
        paddingLeft: 15,
    }
})