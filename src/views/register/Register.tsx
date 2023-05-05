import React from 'react'
import { Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { RoundedButton } from '../../components/RoundedButton';

export const RegisterScreen = () => {
	return (
		<View style={styles.sectionContainer}>
			<Image source={require('./../../../assets/chef.jpg')} 
					style={styles.imageBackground}/>

		 	{/* //Logo de app */}
			<View style={styles.logoContainer}>
				<Image source={require('./../../../assets/user_image.png')}
						style={styles.logoImagen}/>
				
				<Text style={styles.logoText}>Selecciona una imagen</Text>
			</View>

		 	{/* //Formulario de login */}
			<View style={styles.formulario}>
				<Text style={styles.formularioText}>REGISTRARSE</Text>

				<View style={styles.formularioInputGroup}>
					<Image source={require('./../../../assets/user.png')}
							style={styles.formularioIconCorreo}/>
					<TextInput placeholder='Nombres'
								style={styles.formularioTextInput}
								keyboardType='default'/>
				</View>

				<View style={styles.formularioInputGroup}>
					<Image source={require('./../../../assets/my_user.png')}
							style={styles.formularioIconCorreo}/>
					<TextInput placeholder='Apellidos'
								style={styles.formularioTextInput}
								keyboardType='default'/>
				</View>

				<View style={styles.formularioInputGroup}>
					<Image source={require('./../../../assets/email.png')}
							style={styles.formularioIconCorreo}/>
					<TextInput placeholder='Correo electronico'
								style={styles.formularioTextInput}
								keyboardType='email-address'/>
				</View>

				<View style={styles.formularioInputGroup}>
					<Image source={require('./../../../assets/phone.png')}
							style={styles.formularioIconCorreo}/>
					<TextInput placeholder='Telefono'
								style={styles.formularioTextInput}
								keyboardType='numeric'/>
				</View>

				<View style={styles.formularioInputGroup}>
					<Image source={require('./../../../assets/password.png')}
							style={styles.formularioIconCorreo}/>
					<TextInput placeholder='Contraseña'
								style={styles.formularioTextInput}
								secureTextEntry={true}/>
				</View>

				<View style={styles.formularioInputGroup}>
					<Image source={require('./../../../assets/confirm_password.png')}
							style={styles.formularioIconCorreo}/>
					<TextInput placeholder='Confirmar contraseña'
								style={styles.formularioTextInput}
								secureTextEntry={true}/>
				</View>

				<View style={{marginTop:30}}>				
					<RoundedButton text='CONFIRMAR' onPress={ () => ToastAndroid.show('Hola como estas', ToastAndroid.SHORT)}/>
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
		height: '70%',
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
		marginTop: 13
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
		top: '5%',
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
	}
});