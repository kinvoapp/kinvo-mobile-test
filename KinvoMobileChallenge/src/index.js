import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import main from './pages/main';
import './config/StatusBarConfig';

const MainNavigator = createStackNavigator(
  {
    Main: {
      screen: main,
    },
  },
  {
    mode: 'card',
    initialRouteName: 'Main',
  },
);

const App = createAppContainer(MainNavigator);

export default App;
