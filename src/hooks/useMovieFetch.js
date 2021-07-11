import { useState, useEffect } from 'react'
import { isPersistentState } from '../helpers';

import API from '../API';
const initialState = {

    keywords: [],
    vedioResult: [],
    imageBackdrops:[]
}


export const useMovieFetch = movieId => {
    const [state, setState] = useState(initialState)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)


    const fetchMovie = async () => {
        try {
            setLoading(true)
            setError(false)

            const movie = await API.fetchMovie(movieId)
            const credits = await API.fetchCredits(movieId)

            const keyword = await API.fetchKeywords(movieId)
            const veios = await API.fetchVideos(movieId)
            const images = await API.fetchImages(movieId)

            
            // director only 

            const directors = credits.crew.filter(
                member => member.job === 'Director'
            )


            setState({
                ...movie,
                actors: credits.cast,
                directors,
                keywords: keyword.keywords,
                vedioResult: veios.results,
                imageBackdrops: images.backdrops
            })

            setLoading(false)

        } catch (error) {
            setError(true)
        }


    }


    useEffect(() => {

        const sessionState = isPersistentState(movieId);
        if (sessionState) {
            console.log("grap from seesion")
            setState(sessionState);
            setLoading(false);
            return;
        }
        fetchMovie()

    }, [movieId])

    //write
    useEffect(() => {
        sessionStorage.setItem(movieId, JSON.stringify(state))
    }, [movieId, state])

    return { state, loading, error }
}