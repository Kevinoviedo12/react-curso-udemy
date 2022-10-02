import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [images,setImagnes] = useState( [] );
    const [isLoading,setIsLoading] = useState( true );

    const getImages =async () => {
        const newImages = await getGifs( category );
        setImagnes( newImages );
        setIsLoading( false );
    }

    useEffect( () => {
        getImages();
    }, [  ] );

    return{
        images: images,//si una propiedad apunta a un nombre de una variable con ese nombre se puede sacar
        isLoading: isLoading
    }
}


