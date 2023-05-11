import React from 'react'
import { Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { RoundedButton } from '../../components/RoundedButton';
//importamos el viewmodel a emplear
import useViewModel from './ViewModel';
//Importamos el componente de textinput personalizable
import { CustomTextInput } from '../../components/CustomTextInput';
//Importamos los estilos de la vista
import styles from './Styles';

export const RegisterScreen = () => {

	const { name,
			lastname,
			email,
			phone,
			password,
			confirmPassword,
			onChange,
			register
		} = useViewModel();

	return (
		<View style={styles.sectionContainer}>
			<Image source={require('./../../../../assets/chef.jpg')} 
					style={styles.imageBackground}/>

		 	{/* //Logo de app */}
			<View style={styles.logoContainer}>
				<Image source={require('./../../../../assets/user_image.png')}
						style={styles.logoImagen}/>
				
				<Text style={styles.logoText}>Selecciona una imagen</Text>
			</View>

		 	{/* //Formulario de login */}
			<View style={styles.formulario}>
				<Text style={styles.formularioText}>REGISTRARSE</Text>

				<CustomTextInput
					image={ require('./../../../../assets/user.png') }
					placeholder='Nombres'
					keyboardType='default'
					property='name'
					value={ name }
					onChangeText={ onChange }
					/>
				
				<CustomTextInput
					image={ require('./../../../../assets/my_user.png') }
					placeholder='Apellidos'
					keyboardType='default'
					property='lastname'
					value={ lastname }
					onChangeText={ onChange }
					/>
				
				<CustomTextInput
					image={ require('./../../../../assets/email.png') }
					placeholder='Correo electronico'
					keyboardType='email-address'
					property='email'
					value={ email }
					onChangeText={ onChange }
					/>

				<CustomTextInput
					image={ require('./../../../../assets/phone.png') }
					placeholder='Telefono'
					keyboardType='numeric'
					property='phone'
					value={ phone }
					onChangeText={ onChange }
					/>

				<CustomTextInput
					image={ require('./../../../../assets/password.png') }
					placeholder='Contraseña'
					keyboardType='default'
					property='password'
					value={ password }
					secureTextEntry={true}
					onChangeText={ onChange }
					/>

				<CustomTextInput
					image={ require('./../../../../assets/confirm_password.png') }
					placeholder='Confirmar Contraseña'
					keyboardType='default'
					property='confirmPassword'
					value={ confirmPassword }
					secureTextEntry={true}
					onChangeText={ onChange }
					/>

				<View style={{marginTop:20}}>				
					<RoundedButton text='CONFIRMAR' onPress={ () => register()}/>
				</View>
			</View>
		</View>
	);
}