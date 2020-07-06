import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import PeopleList from '../components/PeopleList'

import axios from 'axios';

export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      peoples: [],
      loading: false,
      error: false,
    }
  }

  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => { 
      axios
        .get('https://randomuser.me/api/?nat=br&results=30')
        .then( response => {
          const { results } = response.data;
          this.setState({
            peoples: results,
            loading: false,
          });
        }).catch(error => {
            
            this.setState({
              loading: false, 
              error: true 
            })
        })  
    }, 2000)    
  }

  render() {
    //this.props.navition.navigate(/* Chave da página */, /* State */)
    //this.props.navigation.navigate('PeopleDetail')
    return (
      <View style={styles.container}>
        {
          this.state.loading 
            ? <ActivityIndicator size='large' color='#c4fb6d' />
            : this.state.error
                ? <Text style={styles.error}>Ops... Algo deu errado :( </Text>
                : <PeopleList
                    peoples={this.state.peoples}
                    onPressItem={(pageParams) => {
                    this.props.navigation.navigate('PeopleDetail', pageParams);
                    }
                  } />
            
               
        }
        
      </View>
  );
}
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#393e46',
    justifyContent: 'center'
  },
  error:{
    fontSize: 20,
    color: '#eeeeee',
    alignSelf: 'center'
  }
})