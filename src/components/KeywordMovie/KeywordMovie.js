import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'
import TopBanner from '../Breadcumb/TopBanner/TopBanner';
import { useKeywordMovies } from '../../hooks/useKeywordMovies'
import Spiner from '../Spiner';
import List from '../List/List'
import { POSTER_SIZE, IMAGE_BASE_URL } from '../../Config'
import placeholder from '../../images/placeholder.png'
const KeywordMovie = () => {

    const { keywordId, name } = useParams();
    const { state, loading, error } = useKeywordMovies(keywordId)

    if (loading) return <Spiner />;

    if (error) return ('Something went to wrong!');
    console.log(state)
    return (
        <div>
            <TopBanner
                name={name}
                totalMovie={state.results.length}
            />

            <div className="container py-4">
                {
                    state.results.map(keyword => (
                        <List
                            id={keyword.id}
                            image={keyword.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + keyword.poster_path : placeholder}
                            name={keyword.original_title.split(' ').join('-')}
                            releaseDate={keyword.release_date}
                            overView={keyword.overview}
                            clickble={true}

                            />
                    ))
                }
            </div>
        </div>
    )
}

export default KeywordMovie
