import React, {useState} from 'react'
import {Image,Text,View,} from 'react-native';

import { RoundedButton } from './../../components/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../App';

//Importamos el viewModel para hacer uso de las propiedades
import useViewModel from './ViewModel';
//Importamos el componente de textinput personalizable
import { CustomTextInput } from '../../components/CustomTextInput';
//Importamos los estilos de la vista
import styles from './Styles';

export const HomeScreen = () => {

    // Para emplear la navegacion entre componentes HOOK
    // Solucionar el error al emplear "navigation.navigate" error de param name
	// 1.-Usar el siguiente hook
	// 2.- Empleamos objeto navigation.navigate para colocar enlace dentro de un TouchableOpacity
	// 3.- En App.tsx RootStackParamList para indicar que las vistas no reciben parametros
	// 4.- Pasamos tipado de dato RootStackParamList a Stack en App.tsx
	// 5.- Tipamos datos en el Hook useNavigation a continuación
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

	//Como el return del viewmodel trae consigo 2 valores en formato array
	//se emplea la instancia directamente como a continuacion
	//Concepto desestructuracion
	//El metodo personalizado de onChange se importa para emplear setters
	const { email, password, onChange } = useViewModel();

    return (
		<View style={styles.sectionContainer}>
			<Image source={require('./../../../../assets/chef.jpg')} 
					style={styles.imageBackground}/>

		 	{/* //Logo de app */}
			<View style={styles.logoContainer}>
				<Image source={require('./../../../../assets/logo.png')}
						style={styles.logoImagen}/>
				
				<Text style={styles.logoText}>Aplicación de comida</Text>
			</View>

		 	{/* //Formulario de login */}
			<View style={styles.formulario}>
				<Text style={styles.formularioText}>INGRESAR</Text>

				<CustomTextInput
					image={ require("./../../../../assets/email.png") }
					placeholder='Correo electronico'
					keyboardType='email-address'
					property='email'
					value={email}
					onChangeText={onChange}/>

				<CustomTextInput
					image={ require("./../../../../assets/password.png") }
					placeholder='Contraseña'
					keyboardType='default'
					property='password'
					value={password}
					secureTextEntry= {true}
					onChangeText={onChange}/>

				<View style={{marginTop:30}}>
					{/* <Button title='ENTRAR' onPress={ () => ToastAndroid.show('hola', ToastAndroid.LONG)}/> */}
					<RoundedButton text='ENTRAR' onPress={ () => {
						console.log('Email: '+ email);
						console.log('Contra: '+ password);
					}}/>
				</View>

				<View style={styles.formularioRegistrate}>
					<Text>No tienes cuenta?</Text>
                    
                    {/* Verificar en App.tsx como solucionar error tras indicar name de componente "RootStackParamList" */}
                    <TouchableOpacity onPress={ () => navigation.navigate('RegisterScreen') }>
					    <Text style={styles.formularioRegistrateEnlace}>Registrate</Text>
                    </TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
