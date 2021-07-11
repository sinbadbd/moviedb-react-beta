import { useState, useEffect } from 'react'
import API from '../API';

export const usePersonFetch = actorId => {
    const [state, setState] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)


    const fetchPerson = async () => {
        try {
            setIsLoading(true)
            setError(false)

            const person = await API.fetchPerson(actorId)
 
            setState({
                ...person
            })
        }catch (error) {
            setError(true)
        }
        setIsLoading(false)
    }

    useEffect(() =>{

        fetchPerson()

    },[ actorId ])

    return { state, isLoading, error}
}

