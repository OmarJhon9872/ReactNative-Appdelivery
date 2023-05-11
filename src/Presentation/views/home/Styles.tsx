import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
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

export default HomeStyles;