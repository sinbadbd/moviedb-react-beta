import React from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";

import { useMovieFetch } from "../hooks/useMovieFetch";
import { POSTER_SIZE, IMAGE_BASE_URL } from "../Config";

import Breadcumb from "./Breadcumb/index";
import Spiner from "./Spiner";
import MovieInfo from "./MovieInfo";
import Actor from "./Actor";
import RightSideBarInfo from "./Sidebar/index";
// import convertMoney from '../helpers'

import { Tabs, Tab } from "react-bootstrap";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'



const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    centerPadding: "160px",
    slidesToShow: 7,
    swipeToSlide: true,
    afterChange: function (index) {
        console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
    },
};

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
                    <div className="col-9">
                        <Slider {...settings}>
                            {movie.actors.map((actor) => (
                                <div key={actor.credit_id} className="px-2">
                                    <Actor
                                        imageURL={
                                            actor.profile_path
                                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                                                : "no image"
                                        }
                                        isClickable={true}
                                        actorId={actor.id}
                                        name={actor.name}
                                        charecter={actor.character}
                                    />
                                </div>
                            ))}
                        </Slider>


                        <div className="media-section">
                            <Tabs defaultActiveKey="Vedio" id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="Vedio" title={`Vedio ${movie.vedioResult.length}`}>
                                    <div className="row">
                                        {movie.vedioResult.map(vedio => (
                                            <div className="col-3">
                                                <div className="h-25" key={vedio.id}>
                                                    <div>
                                                        <LiteYouTubeEmbed
                                                            id={vedio.key}
                                                            title={vedio.name}
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
                                            <div className="col-3">
                                                <div className="h-25" key={image.id}>
                                                    <div>
                                                        <img class="img-fluid" src={`${IMAGE_BASE_URL}${POSTER_SIZE}${image.file_path}`}></img>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </Tab>
                            </Tabs>
                        </div>

                    </div>
                    <div className="col-3 shadow-sm  bg-body rounded">
                        <RightSideBarInfo
                            movieStatus={movie.status}
                            revenue={movie.revenue}
                            voteCount={movie.vote_count}
                        />

                        <h4>Keywords</h4>
                        <div className="">
                            {movie.keywords.map(keyword => (
                                // <button className="btn btn-default p-1">{keyword.name}</button>
                                <button key={keyword.id} type="button" className="btn btn-secondary btn-sm m-1">{keyword.name}</button>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Movie;

// revenue,voteCount