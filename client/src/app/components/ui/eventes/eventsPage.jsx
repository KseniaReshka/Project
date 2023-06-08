import React from "react";
import PropTypes from "prop-types";
import Quality from "../qualities/quality";

const EventPage = (event) => {
    <>
        <h1>EVENT</h1>
        {event.map((e) => (
            <Quality key={e._id} {...e} />
        ))}
    </>;
};

EventPage.propTypes = {
    event: PropTypes.array
};

export default EventPage;
