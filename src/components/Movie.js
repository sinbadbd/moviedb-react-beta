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
                                        actorId ={actor.id}
                                        name={actor.name}
                                        charecter={actor.character}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="col-3 shadow-sm  bg-body rounded">
                        <RightSideBarInfo 
                            movieStatus={movie.status}
                            revenue={movie.revenue}
                            voteCount={movie.vote_count}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Movie;

// revenue,voteCount