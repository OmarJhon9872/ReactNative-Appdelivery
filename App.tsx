import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/views/home/Home';
import { RegisterScreen } from './src/views/register/Register';

// Solucion a objeto "navigation.navigate" parametro name 
export type RootStackParamList = {
	HomeScreen: undefined,
	RegisterScreen: undefined
}

// Indicamos que nuestras vistas se renderizaran sin parametros
const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
	return (
		<NavigationContainer>
			{/* Para desaparecer la barra de estado de navegacion en pantalla principal */}
			<Stack.Navigator screenOptions={{
				headerShown: false
			}}>

			{/* Si importa el orden de las pantallas */}
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
			<Stack.Screen name="RegisterScreen" component={RegisterScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
export default App;