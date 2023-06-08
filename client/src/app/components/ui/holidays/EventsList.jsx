import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Quality from "../qualities/quality";
import { useDispatch, useSelector } from "react-redux";
import {
    getEventById,
    geteventLoadingStatus,
    loadeventList
} from "../../../store/events";

const EventsList = ({ colors }) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(geteventLoadingStatus());
    const eventList = useSelector(getEventById(colors));
    useEffect(() => {
        dispatch(loadeventList());
    }, []);

    if (isLoading) return "Loading...";

    return (
        <>
            {eventList.map((qual) => {
                const event = { name: qual.event, color: qual.color };
                return <Quality key={qual._id} {...event} />;
            })}
        </>
    );
};

EventsList.propTypes = {
    colors: PropTypes.array
};

export default EventsList;
