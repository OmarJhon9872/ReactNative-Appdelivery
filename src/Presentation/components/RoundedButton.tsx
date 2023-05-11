import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { MyColors } from './../theme/AppTheme'

//COMPONENTE BASE CREADO CON SNIPET "racf"
//* 1 Para pasar parametros
interface Props {
    text: string,
    //# 1 Creamos interface de press
    onPress: () => void
}

//*# 2 Recibimos el parametro
export const RoundedButton = ({text, onPress}: Props) => {
  return (
    <TouchableOpacity 
        //# 3 Tras dar click llamamos a la funcion recibida
        onPress={ () => onPress() }
        style={styles.roundedButton}> 

        {/* //3* Mostramos dato */}
        <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    roundedButton: {
        width: '100%',
        height: 50,
        backgroundColor: MyColors.primary, 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold'
    }
})