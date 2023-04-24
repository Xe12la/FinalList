import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screen/Home';
import Details from './screen/Details';

const Stack = createNativeStackNavigator();

function App(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Details" component={Details}/>
    </Stack.Navigator>
  )
}


export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}