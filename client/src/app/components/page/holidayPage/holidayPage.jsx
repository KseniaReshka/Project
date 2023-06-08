import React from "react";
import { useSelector } from "react-redux";
import { getHolidayById } from "../../../store/holiday";
import PropTypes from "prop-types";
import HolidayCard from "../../ui/holidays/holidayCard";
import { useParams } from "react-router-dom";
import EvensList from "../../ui/eventes/eventsList";

const HolidayPage = ({ holidayId }) => {
    const city = useSelector(getHolidayById(holidayId));
    const params = useParams();
    const { eventId } = params;

    return (
        <>
            {city ? (
                eventId ? (
                    <EvensList eventId={eventId} />
                ) : (
                    <HolidayCard city={city} />
                )
            ) : (
                <h1>Loading</h1>
            )}
        </>
    );
};

HolidayPage.propTypes = {
    holidayId: PropTypes.string.isRequired
};

export default HolidayPage;
