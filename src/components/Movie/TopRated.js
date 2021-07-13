import React from 'react'
import Gride from '../Grid'
import Filter from '../Sidebar/Filter/Filter'
import { POSTER_SIZE, IMAGE_BASE_URL } from '../../Config'
//Hook
import { useFetchAllMovies } from '../../hooks/useFetchAllMovies'
// import Gride from './Grid/index';
import Thumb from '../Thumb/index';
// import Spiner from '../../Spiner';
import ProgressBar from '../../Utils/ProgressBar';
import placeholder from '../../images/placeholder.png'
import Spiner from '../Spiner/index';
import Button from '../Button'
const TopRated = () => {

    const { state, loading, error, setIsLoadingMore } = useFetchAllMovies('top_rated');

    // if (loading) return <Spiner />;

    if (error) return ('Something went to wrong!');

    console.log('now playing', state)
    return (
        <div className="container">
            <div className="row">
                <Filter />
                <div className="col-lg-10">
                    <Gride header={'Top Rated'}>
                        {
                            state.results.map(movie => (
                                <div className="col-lg-2 col-6 mb-4 d-flex align-content-stretch flex-wrap" key={movie.id}>
                                    <div className="shadow-sm position-relative">
                                        <Thumb
                                            key={movie.id}
                                            clickble
                                            image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : placeholder}
                                            movieId={movie.id}
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
                </div>
                <div>
                    {loading && <Spiner />}
                    {state.page < state.total_pages && !loading && (
                        <Button text="Load More" callback={() => setIsLoadingMore(true)} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default TopRated
