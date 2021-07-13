import React,{ useRef } from 'react'
import { useParams } from 'react-router-dom'
import TopBanner from '../Breadcumb/TopBanner/TopBanner';

const KeywordMovie = () => {

    const { keywordId,name } = useParams();

    console.log(keywordId)
    return (
        <div>
            <TopBanner name={name} />
        </div>
    )
}

export default KeywordMovie
