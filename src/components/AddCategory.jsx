import { useState } from "react";

export const AddCategory = ( {  onNewCategory } ) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = ( event ) => {
        //console.log(event.target.value);
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();  //previene que se refresque la pagina
        if(inputValue.trim().length <=1 )return;//se cumple si tinee mas de un caracter, es para que no se mande nada vacio
        onNewCategory( inputValue.trim() );
        //setCategories( categories => [inputValue, ...categories] );
        setInputValue( '' );// lo seteo vacio para que se elimine lo que escribo enn el input value
    }

    return(
        <form onSubmit={ onSubmit }> 
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange = { (event) => onInputChange(event) }
            />
        </form>

        
    );
}