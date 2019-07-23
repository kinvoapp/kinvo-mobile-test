import { createStackNavigator, createAppContainer } from 'react-navigation';
import { ProductsScreen } from './pages/products';
import './config/StatusBarConfig';

const AppNavigator = createStackNavigator({
    Products: {
        screen: ProductsScreen
    }
});

export default createAppContainer(AppNavigator);