import React from 'react'
import { Image, KeyboardType, StyleSheet, TextInput, View } from 'react-native';

//Recibiremos parametros 
interface Props {
    image: any,
    placeholder: string,
    value: string,
    keyboardType: KeyboardType,
    secureTextEntry?: boolean,
    property: string,
    onChangeText: (property: string, value: any) => void
}

export const CustomTextInput = ({
    image,
    placeholder,
    value,
    keyboardType,
    secureTextEntry = false,
    property,
    onChangeText,
}: Props) => {
  return (
    <View style={styles.formularioInputGroup}>
        {/* <Image  source={require(image)} */}
        <Image  source={ image }
                style={styles.formularioIconCorreo}/>
        <TextInput  placeholder     = { placeholder }
                    style           = { styles.formularioTextInput }
                    keyboardType    = { keyboardType }
                    value           = { value }
                    secureTextEntry = { secureTextEntry }
                    // onChangeText={ textoUsuario => setEmail(textoUsuario) } />
                    onChangeText    = { textoUsuario => onChangeText(property, textoUsuario) } />
    </View>
  )
}

const styles = StyleSheet.create({
    formularioInputGroup: {
		flexDirection: 'row',
		marginTop: 10
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
});
