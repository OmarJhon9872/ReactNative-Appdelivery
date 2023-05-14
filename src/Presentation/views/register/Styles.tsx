import { StyleSheet } from "react-native";

const RegisterStyles = StyleSheet.create({
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

export default RegisterStyles;