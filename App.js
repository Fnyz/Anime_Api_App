
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './src/pages/Details';
import Home from './src/pages/Home';
import { GlobalProvider } from './context';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <GlobalProvider>
    <NavigationContainer>
    <Stack.Navigator  screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen name="Home" component={Home}  options={{ title: 'AnimeList' }}/>
      <Stack.Screen name="Details" component={Details} options={{ title: 'Details' }}/>
    </Stack.Navigator>
  </NavigationContainer>
   </GlobalProvider>
    
  );
}
