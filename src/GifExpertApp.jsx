import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState( [ ' Boca juniors ' ] );// si esta asi siempre es un arreglo

    const onAddCategory = ( onNewCategory ) => {
        //console.log(onNewCategory);
        if( categories.includes(onNewCategory) )return; // aca incluyo en onnewcategory con el INCLUDES y pregunto si esta dentro, si esta no hace nada, sino salta a la siguiente linea

        setCategories( [ onNewCategory, ...categories ] );
    }
    return(
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
            onNewCategory = { event => onAddCategory(event) }
        />

        { categories.map( category =>(
            <GifGrid key={ category } 
            category= { category } 
            />
        )) 
    }

        </>
        
    );
}