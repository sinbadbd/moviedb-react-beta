import React, {useState,useEffect} from 'react';
import { POSTER_SIZE, IMAGE_BASE_URL, BACKDROP_SIZE} from '../Config'
 
//Hook
import { useHomeFetch } from '../hooks/useHomeFetch'
import HeroImage from './HeroImage/index'

const Home = () => {

const { state, loading , error} = useHomeFetch()

console.log(state)
    return (
        <>
            { 
                state.results[0] ? 
                    <HeroImage 
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                        title={state.results[0].title}
                        text={state.results[0].overview}
                        
                    /> 
                : null 

               
            }
           
        </>
    )

}
export default Home;