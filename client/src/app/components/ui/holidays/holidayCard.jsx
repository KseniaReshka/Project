import React from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getevent } from "../../../store/events";

const HolidayCard = ({ city }) => {
    const params = useParams();
    const { holidayId } = params;
    const events = useSelector(getevent());
    const eventArr = [];
    const x = () => {
        const z = city.events.map((id) => {
            if (events) {
                const y = events.map((ev) => {
                    if (ev.name === id) {
                        eventArr.push(ev);
                        console.log("eventArr", eventArr);
                        return ev.name;
                    }
                    return null;
                });
                return y;
            }
            return null;
        });
        return z;
    };
    x();
    return (
        <div className="container">
            <div className="card mb-3">
                <div className="d-flex flex-column position-relative align-items-centr text-center ">
                    <img src={city.image} width="850" />
                    <div className="mt-3">
                        <h2>{city.city}</h2>
                        <div className="text-muted">
                            <i
                                className="bi bi-caret-down-fill text-primary"
                                role="button"
                            ></i>
                            <i
                                className="bi bi-caret-up text-secondary"
                                role="button"
                            ></i>
                            <span className="ms-2">{city.rate}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-6">
                <div className="card-body ">
                    {eventArr.map((el) => (
                        <div key={el._id} className="btn btn-mb6">
                            <Link to={`/city/${holidayId}/${el._id}`}>
                                {el.event}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
HolidayCard.propTypes = {
    city: PropTypes.object
};

export default HolidayCard;
