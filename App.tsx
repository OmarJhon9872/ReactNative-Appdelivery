import React from 'react';
import {
	Image,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';

function App(): JSX.Element {
	return (
		<View style={styles.sectionContainer}>
			<Image source={require('./assets/chef.jpg')} 
					style={styles.imageBackground}/>

		 	{/* //Logo de app */}
			<View style={styles.logoContainer}>
				<Image source={require('./assets/logo.png')}
						style={styles.logoImagen}/>
				
				<Text style={styles.logoText}>Aplicación de comida</Text>
			</View>

		 	{/* //Formulario de login */}
			<View style={styles.formulario}>
				<Text style={styles.formularioText}>INGRESAR</Text>

				<View style={styles.formularioInputGroup}>
					<Image source={require('./assets/email.png')}
							style={styles.formularioIconCorreo}/>
					<TextInput placeholder='Correo electronico'
								style={styles.formularioTextInput}/>
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
	}
});

export default App;
