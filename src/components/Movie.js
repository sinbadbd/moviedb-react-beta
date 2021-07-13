import React from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import { useMovieFetch } from "../hooks/useMovieFetch";
import { POSTER_SIZE, IMAGE_BASE_URL } from "../Config";

import Breadcumb from "./Breadcumb/index";
import Spiner from "./Spiner";
import MovieInfo from "./MovieInfo";
import Actor from "./Actor";
import RightSideBarInfo from "./Sidebar/index";
// import convertMoney from '../helpers'

import { Tabs, Tab } from "react-bootstrap";

// import NotFoundImage from '../Utils/NotFoundImage';
import placeholder from '../images/placeholder.png';
import KeywordButton from "../components/Keyword/KeywordButton";

const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    centerPadding: "160px",
    slidesToShow: 7,
    swipeToSlide: true,
    responsive: [
        {
          breakpoint: 320,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 2, slidesToScroll: 2, infinite: false }
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false }
        }
      ],
    afterChange: function (index) {
        console.log(
            //`Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
    },
};

const showModal = () => {
    console.log('press youtube')
}
function Movie() {
    const { movieId } = useParams();
    const { state: movie, loading, error } = useMovieFetch(movieId);

    console.log(movie);
    console.log(movieId);

    if (loading) return <Spiner />;
    if (error) return <div>Something went wrong</div>;

    return (
        <div>
            <Breadcumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />

            <div className="container-fluid">
                <div className="row">
                    <h3 className="mt-4 mb-2">Cast</h3>
                    <div className="col-lg-9">
                        <Slider {...settings}>
                            {movie.actors.map((actor) => (
                                <div key={actor.credit_id} className="px-2">
                                    <Actor
                                        imageURL={
                                            actor.profile_path
                                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                                                : placeholder
                                        }
                                        isClickable={true}
                                        actorId={actor.id}
                                        name={actor.name}
                                        urlParam={actor.name.split(' ').join('-')}
                                        charecter={actor.character}
                                    />
                                </div>
                            ))}
                        </Slider>


                        <div className="media-section">
                            <h4>Media</h4>
                            <Tabs defaultActiveKey="Vedio" id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="Vedio" title={`Vedio ${movie.vedioResult.length}`}>
                                    <div className="row">
                                        {movie.vedioResult.map(vedio => (
                                            <div className="col-3 mb-2">
                                                <div className="h-25" key={vedio.id}>
                                                    <div>
                                                        <LiteYouTubeEmbed
                                                            id={vedio.key}
                                                            title={vedio.name}
                                                            onClick={() => showModal()}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Tab>
                                <Tab eventKey="backdrops" title="Backdrops">
                                    <div className="row">
                                        {movie.imageBackdrops.map(image => (
                                            <div className="col-3 mb-2">
                                                <div className="h-25" key={image.id}>
                                                    <div>
                                                        <img class="img-fluid"
                                                            src={`${IMAGE_BASE_URL}${POSTER_SIZE}${image.file_path}`}>
                                                        </img>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                    <div className="col-lg-3 shadow-sm  bg-body rounded mb-3">
                        <RightSideBarInfo
                            website={movie.homepage}
                            movieStatus={movie.status}
                            revenue={movie.revenue}
                            voteCount={movie.vote_count}
                            Budget={movie.budget}
                        // 
                        />

                        {
                            movie.production_countries.map(con => (
                                <>
                                    <b className="d-block">Language</b>
                                    {con.name}
                                </>
                            ))
                        }


                        <div className="mt-3">
                            <h4>Keywords</h4>
                            <div className="row">
                                {movie.keywords.map(keyword => (
                                    <KeywordButton 
                                        
                                        id={keyword.id}
                                        name={keyword.name.split(' ').join('-')}
                                        clickble={true}

                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Movie;

// revenue,voteCount