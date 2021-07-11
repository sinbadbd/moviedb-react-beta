import React from 'react' 
import { usePersonFetch } from '../../hooks/usePersonFetch';
import { useParams } from "react-router-dom";
import { POSTER_SIZE, IMAGE_BASE_URL} from '../../Config';
import Spiner from '../Spiner/index';

const  ActorProfile = () => {

    const { actorId } = useParams()

    const { state, isLoading, error } = usePersonFetch(actorId)

    console.log(actorId)
    console.log(state)

    if (isLoading) return <Spiner />;
    if (error) {
        return
    }
    return (
        
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                         <img className="img-fluid rounded mb-2" src={`${IMAGE_BASE_URL}${POSTER_SIZE}${state.profile_path}`}></img>

                         <h5> Personal Info  </h5>

                         <h6 className="mb-1">Known For</h6>
                         <p className="m-0">{state.also_known_as}</p>
                         <p>
                             <b>Department</b>
                             <span className="d-block">{state.known_for_department}</span>
                        </p>

                        <p>
                            <b>Birthday</b>
                             <span className="d-block">{state.birthday}</span>
                        </p>
                        
 
                        <p>
                            <b>Birth Place:</b>
                             <span className="d-block">{state.place_of_birth}</span>
                        </p>

                        <p>
                            
                            <b>homepage</b>
                             <span className="d-block"><a href={state.homepage} target="_blank">{state.homepage}</a></span>
                        </p>

                        <p>
                            <b>popularity</b>
                             <span className="d-block">{state.popularity}</span>
                        </p> 
                    </div>
                    <div className="col-10">
                       
                    <h2>Name:{state.name}</h2> 
                    <h3>Biography</h3>
                        <p>Biography{state.biography}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActorProfile
