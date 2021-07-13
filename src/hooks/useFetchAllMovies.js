import { useState, useEffect } from 'react'
import { isPersistentState } from '../helpers';

import API from '../API';

export const useFetchAllMovies = () => {
    const [state, setState] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    

}