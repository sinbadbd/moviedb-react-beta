import { useState, useEffect } from 'react'
import { isPersistentState } from '../helpers';

import API from '../API';

export const useMovieFetch = movieId => {
    const [state, setState] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)


    const fetchMovie = async () => {
        try {
            setLoading(true)
            setError(false)

            const movie = await API.fetchMovie(movieId)
            const credits =  await API.fetchCredits(movieId)

            // director only 

            const directors = credits.crew.filter(
                member => member.job === 'Director'
            )


            setState( {
                ...movie,
                actors: credits.cast,
                directors
            })

            setLoading(false)

        }catch (error) {
            setError(true)
        }


    }


    useEffect(() =>{

        const sessionState = isPersistentState(movieId); 
        if (sessionState){
            setState(sessionState);
            setLoading(false);
            return;
        }
        fetchMovie()

    },[ movieId ])

    //write
    useEffect(() =>{
        sessionStorage.setItem(movieId, JSON.stringify(state))
    },[ movieId , state])

    return {state,loading,error}
}