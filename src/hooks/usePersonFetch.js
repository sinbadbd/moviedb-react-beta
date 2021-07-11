import { useState, useEffect } from 'react'
import API from '../API';
import { isPersistentState } from '../helpers';

const initialState = {
     profiles:[],
     MovieCast: [],
    //  TvCast:[]
}



export const usePersonFetch = actorId => {
    const [state, setState] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)


    const fetchPerson = async () => {
        try {
            setIsLoading(true)
            setError(false)

            const person = await API.fetchPerson(actorId)
            const personImage = await API.fetchPersonImage(actorId)
            const personMovies = await API.fetchPersonmovieCredits(actorId)
            //const personTvCredits = await API. fetchPersontvCredits(actorId)
            // if (personPopular == null || personLatest == null || personChanges === null || personMovieCredit == null || personTvCredits == null || personCombinedCredits == null) {
            //     return
            // }

            setState({
                ...person,
                ...personImage,
                MovieCast:personMovies.cast,
                // TvCast:personTvCredits.cast, 
                // ...personCombinedCredits,
                // ...personExternalIds,
                // ...personTaggedImages,
                // ...personTranslations,
                // ...personLatest,
                // ...personPopular  

                // ...personChanges
            })
        }catch (error) {
            console.error('Oops!', error);
            setError(true)
        }
        setIsLoading(false)
    }
    console.log(state) 
    useEffect(() =>{
        const sessionState = isPersistentState(actorId); 
        if (sessionState){
            console.log("actor: grap from seesion")
            setState(sessionState);
            setIsLoading(false);
            return;
        }

        fetchPerson()

    },[ actorId ])

        //write
        useEffect(() =>{
            sessionStorage.setItem(actorId, JSON.stringify(state))
        },[ actorId , state])

    return { state, isLoading, error}
}

// const personTvCredits   = await API.fetchPersontvCredits(actorId)
// const personCombinedCredits = await API.fetchPersoncombinedCredits(actorId)
// const personExternalIds = await API.fetchPersonexternalIds(actorId)
// const personTaggedImages = await API.fetchPersontaggedImages(actorId)
// const personTranslations = await API.fetchPersonTranslations(actorId)
// const personLatest = await API.fetchPersonLatest(actorId)
// const personPopular = await API.fetchPersonPopular(actorId)

// const personChanges = await API.fetchPersonChanges(actorId) 