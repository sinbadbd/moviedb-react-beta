import React, { useState,useEffect,useRef} from 'react';

const SearchBar = ( { setSearchTerm}) => {
    const [ state, setState ] = useState('')

    const initil = useRef(false)

    useEffect(() =>{
        if (initil.current){
            initil.current = false
            return
        }
        const timer = setTimeout(() =>{
            setSearchTerm(state)
        },500)

        return () => clearTimeout(timer)
    },[setSearchTerm,state])

    return ( 
        <>
        <nav className="navbar col-8 mx-auto">
            <input 
                className="form-control me-2" 
                type="text" 
                placeholder="Search" 
                aria-label="Search"
                onChange={event => setState(event.currentTarget.value)}
                value={state}>
                
            </input>
        </nav>

        </>
    )
}

export default SearchBar;