import React, { useState, useEffect, useRef } from 'react';
import { isPersistentState } from '../helpers';

import API from '../API';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

export const useFetchAllMovies = typeMovies => {
    const [state, setState] = useState(initialState)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const fetchMovies = async (page) => {

        try {
            setLoading(true)
            setError(false)

            const movies = await API.fetchAllTypeMovies(typeMovies, page)//await API.fetchAllMovies()
 
            setState(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }))

        } catch (error) {
            setError(true)
        }
        setLoading(false)
    }

    useEffect(() => {
        const sessionState = isPersistentState(typeMovies);
        if (sessionState) {
            console.log("grap from seesion")
            setState(sessionState);
            setLoading(false);
            return;
        }

        fetchMovies()
    }, [])


    // paging
    useEffect(() => {
        if (!isLoadingMore) return;
        fetchMovies(state.page + 1)
        setIsLoadingMore(false)

    }, [isLoadingMore, state.page])

    // Write sessionState

    useEffect(() => {
        sessionStorage.setItem(typeMovies, JSON.stringify(state))
    }, [typeMovies, state])


    return { state, loading, error, setIsLoadingMore }

}