import {useState, useEffect}  from 'react'
import API from '../API';


const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

export const useKeywordMovies =  keywordId => {

    const [state, setState] = useState(initialState)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchmovie = async () => {
        try {
            setLoading(true)
            setError(false)

            const movies = await API.fetchKeywordsMovies(keywordId)//await API.fetchAllMovies()fetchKeywordsMovies
 
            setState({
                results:movies.results
            })

        } catch (error) {
            setError(true)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchmovie()
    },[])

    return {state,loading,error} 

}
