import { Modal } from 'bootstrap'
import React, { useState, useEffect, useRef } from 'react'
import { usePersonFetch } from '../../hooks/usePersonFetch';
import { useParams } from "react-router-dom";
import { POSTER_SIZE, IMAGE_BASE_URL } from '../../Config';
import Spiner from '../Spiner/index';
import Slider from "react-slick";
import ModalCustom from '../../Utils/ModalCustom';
import Actor from '../Actor/index'
import { Link } from 'react-router-dom'

const imageSettings = {
    autoplay: false,
    dots: false,
    infinite: true,
    speed: 500,
    centerPadding: "160px",
    slidesToShow: 1,
    swipeToSlide: true,
    afterChange: function (index) {
        console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
    },
};


const movieCastSettings = {
    autoplay: false,
    dots: false,
    infinite: true,
    speed: 500,
    centerPadding: "160px",
    slidesToShow: 8,
    swipeToSlide: true,
    afterChange: function (index) {
        console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
    },
}

const ActorProfile = () => {

    const { actorId } = useParams()

    const { state, isLoading, error } = usePersonFetch(actorId)

    console.log(actorId)
    console.log("state-all-api",state)
    console.log('state-profile', state.profiles)

    const [modal, setModal] = useState()
    const actorImageModal = useRef()


    useEffect(() => {
        setModal(
            new Modal(actorImageModal.current)
        )
    }, [])


    if (isLoading) return <Spiner />;
    if (error) {
        return
    }


    return (

        <div>

            <div className="modal fade" ref={actorImageModal} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog  modal-dialog-centered modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{state.name} </h5>
                            <button type="button" className="btn-close" onClick={() => modal.hide()} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <Slider {...imageSettings}>
                                    {state.profiles.map((profile) => (
                                        <div className="col-3">
                                            <img className="img-fluid rounded mb-2"
                                                src={`${IMAGE_BASE_URL}${POSTER_SIZE}${profile.file_path}`}>
                                            </img>
                                        </div>
                                    ))} 
                                </Slider>

                                <div>

                                </div>
                            </div>
                            <span className="text-right text-sm">Total:{state.profiles.length}</span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 ">
                       <div className="container-image">
                            <img className="img-fluid rounded mb-2 image"
                                src={`${IMAGE_BASE_URL}${POSTER_SIZE}${state.profile_path}`}> 
                            </img>
                            <div className="middle">
                                <div className="text" onClick={() => modal.show()}>View</div>
                            </div>
                       </div>

                        <h5> Personal Info  </h5>

                        <h6 className="mb-1"><b>Known For</b></h6>
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

                        <h2>{state.name}</h2>
                        <h4>Biography</h4>
                        <p>Biography{state.biography}</p>


                        <div className="row">
                            <h3>Movies</h3>
                            <Slider {...movieCastSettings}>
                                    {state.MovieCast.map((movie) => (
                                        <div className="col-2" key={movie.id}>
                                            {/* <Link to={`${movie.id}`}> */}
                                                <img className="img-fluid rounded mb-2 px-2"
                                                    src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}>
                                                </img>
                                            {/* </Link> */}
                                            
                                            <p>{movie.original_title}</p>
                                        </div>
                                    ))} 
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>

            {/* {<ModalCustom show={isOpen} onHide={hideModal} />} */}
        </div>
    )
}

export default ActorProfile
