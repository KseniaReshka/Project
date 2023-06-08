import React from "react";
import PropTypes from "prop-types";
import Quality from "../qualities/quality";
import { useSelector } from "react-redux";
import { getevent } from "../../../store/events";
import { useHistory } from "react-router-dom";

const EvensList = ({ eventId }) => {
    const history = useHistory();
    const ev = useSelector(getevent());
    const eventofHoliday = ev.filter((e) => e._id === eventId);
    const handeleClick = () => {
        history.goBack();
    };

    if (eventofHoliday) {
        return (
            <>
                {eventofHoliday.map((e) => {
                    const event = { name: e.event, color: e.color };
                    return (
                        <>
                            <Quality key={e._id} {...event} />
                            {e.text.map((el) => (
                                <div key={el._id} className="card mb-6">
                                    <div className="btn btn-mb6">
                                        <h1>{el.name}</h1>
                                        <h2>{el.data}</h2>
                                    </div>
                                </div>
                            ))}
                            <button
                                type="button"
                                className="btn btn-outline-info"
                                onClick={handeleClick}
                            >
                                Вернуться обратно
                            </button>
                        </>
                    );
                })}
            </>
        );
    }
};

EvensList.propTypes = {
    eventId: PropTypes.string
};

export default EvensList;
