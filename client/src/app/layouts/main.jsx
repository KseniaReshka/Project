import React from "react";
import { useSelector } from "react-redux";
import { getCities } from "../store/cities";

const Main = () => {
    const cities = useSelector(getCities());
    return (
        <>
            <h1> Путешествуй по России с легкостью!</h1>
            <main>
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://i.pinimg.com/564x/8c/3d/f3/8c3df304065a85e74bfd839a6cd93ef3.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://i.pinimg.com/564x/64/bc/54/64bc54ed22e4777912839a1e0dc5d535.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://i.pinimg.com/564x/15/40/26/154026f733829414ed1a5c391580a2f8.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                {/* <div
                    id="carouselControls"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://i.pinimg.com/564x/b5/db/b6/b5dbb6599004a0d0bf84b34a8605498b.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://i.pinimg.com/564x/77/17/d9/7717d9e6eefce77acd875432485a1b72.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://i.pinimg.com/736x/d6/b0/46/d6b0468711654ad70aded24c0d84573c.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                    </div>
                    <a
                        href=""
                        className="carousel-control-prev"
                        role="button"
                        data-slide="prev"
                    >
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a
                        href=""
                        className="carousel-control-next"
                        role="button"
                        data-slide="next"
                    >
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div> */}
            </main>
            <div className="container mt-5">
                {cities
                    ? cities.map((el) => <h2 key={el._id}>{el.city}</h2>)
                    : "loading"}
            </div>
        </>
    );
    //     });
    // }
};

export default Main;
