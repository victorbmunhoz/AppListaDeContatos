import React from 'react';
import { 
    View,
    Text,
    StyleSheet, 
    Image
} from 'react-native';

import Line from '../components/Line'

export default class PeopleDetailPage extends React.Component {
    render() {
        const { people } = this.props.navigation.state.params;
        return(
            <View style={styles.container}>
                <Image 
                    style={styles.avatar} 
                    source={{ uri: people.picture.large }} />
                <View style={styles.detailContainer}>
                        <Line label='Email:' content= {people.email} />
                        <Line label='Cidade:' content= {people.location.city} />
                        <Line label='Estado:' content= {people.location.state} />
                        <Line label='Tel:' content= {people.phone} />
                        <Line label='Cel:' content= {people.cell} />
                        <Line label='Nacionalidade:' content= {people.nat} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
     padding: 15,
     alignItems: 'center',
     backgroundColor: '#393e46',
     flex: 1 
    },   
        avatar: {
        aspectRatio: 1,
        borderRadius: 300,
        width: 350,
        borderWidth: 1,
        borderColor: '#c4fb6d'
    },
    detailContainer: {
        backgroundColor: '#eeeeee',
        marginTop: 20,
        elevation: 1,
        width: 350,
    },
})