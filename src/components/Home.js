import React from 'react';
import { POSTER_SIZE, IMAGE_BASE_URL, BACKDROP_SIZE} from '../Config'
 
//Hook
import { useHomeFetch } from '../hooks/useHomeFetch'
import HeroImage from './HeroImage/index'
import Gride from './Grid/index';
import Thumb from './Thumb/index';
import SearchBar from './SearchBar/index';
import Button from './Button/index';
import Spiner from './Spiner/index';
import ProgressBar from '../Utils/ProgressBar';
import placeholder from '../images/placeholder.png'
const Home = () => {

    const { 
        state, 
        loading ,
        error,
        searchTerm,
        setSearchTerm,
        setIsLoadingMore
    } = useHomeFetch()

    // if(loading) return <Spiner/>;

    if (error) return <>Something went wrong</>;

     return (
        <>
            <SearchBar setSearchTerm={setSearchTerm}/>
            { 
              !searchTerm &&  state.results[0] ? 
                    <HeroImage 
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                        title={state.results[0].title}
                        text={state.results[0].overview}
                        
                    /> 
                : null  
            }
            
           <Gride header={searchTerm ? 'Search Movies' : 'Popluar Movies'}>
               { state.results.map(movie => (
                   
                   <div className="col-lg-2 col-6 mb-4 d-flex align-content-stretch flex-wrap" key={movie.id}>
                       <div className="shadow-sm position-relative">
                            <Thumb 
                                    key={movie.id} 
                                    clickble
                                    image= {movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : placeholder}
                                    movieId = {movie.id} 
                                />
                            <p className="mt-1">{movie.title}</p>
                            <div className="position-absolute progressbarBg homepage-circle">
                                <ProgressBar 
                                    strokeWidth={10}
                                    percentage={movie.vote_average * 10}
                                    width={30}
                                    height={30} 
                                />
                            </div>
                       </div>
                    </div>
                 ))
                }
           </Gride>

        <div>
        {loading && <Spiner /> }
        { state.page < state.total_pages && !loading && (

            <Button text="Load More" callback={()=>setIsLoadingMore(true)}/>
        )}
        </div>
        </>
    )

}
export default Home;