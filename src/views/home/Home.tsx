import React, {useState} from 'react'
import {
	Image,
	StyleSheet,
	Text,
	TextInput,
	ToastAndroid,
	View,
} from 'react-native';
import { RoundedButton } from './../../components/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../App';

export const HomeScreen = () => {

    // Para emplear la navegacion entre componentes HOOK
    // Solucionar el error al emplear "navigation.navigate" error de param name
	// 1.-Usar el siguiente hook
	// 2.- Empleamos objeto navigation.navigate para colocar enlace dentro de un TouchableOpacity
	// 3.- En App.tsx RootStackParamList para indicar que las vistas no reciben parametros
	// 4.- Pasamos tipado de dato RootStackParamList a Stack en App.tsx
	// 5.- Tipamos datos en el Hook useNavigation a continuación
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

	//SetStates de un componente, empleando importacion "useState", tomar parametros
	//verificar los TextInput, atributo value y onChangeText
	const [email, setEmail] 	  = useState('')
	const [password, setPassword] = useState('')


    return (
		<View style={styles.sectionContainer}>
			<Image source={require('./../../../assets/chef.jpg')} 
					style={styles.imageBackground}/>

		 	{/* //Logo de app */}
			<View style={styles.logoContainer}>
				<Image source={require('./../../../assets/logo.png')}
						style={styles.logoImagen}/>
				
				<Text style={styles.logoText}>Aplicación de comida</Text>
			</View>

		 	{/* //Formulario de login */}
			<View style={styles.formulario}>
				<Text style={styles.formularioText}>INGRESAR</Text>

				<View style={styles.formularioInputGroup}>
					<Image  source={require('./../../../assets/email.png')}
							style={styles.formularioIconCorreo}/>
					<TextInput  placeholder='Correo electronico'
								style={styles.formularioTextInput}
								keyboardType='email-address'
								value={ email }
								onChangeText={ textoUsuario => setEmail(textoUsuario) } />
				</View>

				<View style={styles.formularioInputGroup}>
					<Image source={require('./../../../assets/password.png')}
							style={styles.formularioIconCorreo}/>
					<TextInput placeholder='Contraseña'
								style={styles.formularioTextInput}
								secureTextEntry={true}
								value={ password }
								onChangeText={ textoUsuario => setPassword(textoUsuario) }/>
				</View>

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

const styles = StyleSheet.create({
	sectionContainer: {
		flex: 1,
		backgroundColor: 'black',
	},
	imageBackground: {
		width: '100%',
		height: '100%',
		opacity: 0.7,
		bottom: '30%'
	},
	formulario: {
		width: '100%',
		height: '40%',
		backgroundColor: 'white',
		position: 'absolute',
		bottom: 0,
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		padding: 30
	},
	formularioText: {
		fontWeight: 'bold',
		fontSize: 15
	},
	formularioInputGroup: {
		flexDirection: 'row',
		marginTop: 20
	},
	formularioTextInput: {
		flex: 1,
		borderBottomWidth: 1,
		borderBottomColor: '#AAAAAA',
		marginLeft: 10
	},
	formularioIconCorreo: {
		width: 30,
		height: 30,
		marginTop: 10,
	},
	logoContainer: {
		position: 'absolute',
		alignSelf: 'center',
		top: '15%',
	},
	logoImagen: {
		alignSelf: 'center',
		margin: 'auto', 
		width: 100,
		height: 100,
	}, 
	logoText: {
		color: 'white',
		textAlign: 'center',
		fontSize: 20,
		marginTop: 10,
		fontWeight: 'bold'
	},
	formularioRegistrate: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 20
	},
	formularioRegistrateEnlace: {
		fontStyle: 'italic',
		color: 'orange',
		borderBottomWidth: 1, 
		borderBottomColor: 'orange',
		fontWeight: 'bold',
		marginLeft: 10
	}
});