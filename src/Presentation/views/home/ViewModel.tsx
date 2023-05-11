import React, {useState} from 'react'

const HomeViewModel = () => {

    //SetStates de un componente, empleando importacion "useState", tomar parametros
	//verificar los TextInput, atributo value y onChangeText
	// const [email, setEmail] 	  = useState('')
	// const [password, setPassword] = useState('')

    //En definicion de patron MVVM los setters se representaran dinamicos
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    }

    return {
        ...values,
        onChange
    }
}

export default HomeViewModel;
