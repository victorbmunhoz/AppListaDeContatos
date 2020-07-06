import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';

import capitalizeFirstLetter from './src/útil/capitalizeFirstLetter'

const AppNavigator = createStackNavigator({
    'Main':{
      screen: PeoplePage,
    },
    'PeopleDetail':{
      screen: PeopleDetailPage,
      navigationOptions: ({ navigation }) => {
        const peopleName = navigation.state.params.people.name.first + ' ' + navigation.state.params.people.name.last
        return ({
          title: capitalizeFirstLetter(peopleName),
          headerTitleStyle:{
          color: '#eeeeee',
          fontSize: 30,
          fontFamily: 'sans-serif-medium',
       }
        });
        
      }
    }
}, {
    defaultNavigationOptions:{
       title: 'Pessoas!',
       headerTintColor: '#c4fb6d',
       headerStyle: {
         backgroundColor: '#393e46',
         borderBottomWidth: 2,
         borderBottomColor: '#c4fb6d',
       },
       headerTitleStyle:{
         color: '#eeeeee',
         fontSize: 40,
         fontFamily: 'sans-serif-medium',
         flexGrow: 1,
         textAlign: 'center',
         paddingBottom: 10
       }
    }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;