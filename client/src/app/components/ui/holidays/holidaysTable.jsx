import React from "react";
import PropTypes from "prop-types";
import EventsList from "./EventsList";
import Table from "../../common/table";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { getevent } from "../../../store/events";

const HolidaysTable = ({ holidays, onSort, selectedSort, ...rest }) => {
    const columns = {
        name: {
            path: "city",
            name: "Город",
            component: (holiday) => (
                <Link to={`/city/${holiday._id}`}>{holiday.city}</Link>
            )
        },
        holidays: {
            name: "Мероприятия",
            component: (holiday) => <EventsList colors={holiday.events} />
        },
        rate: { path: "rate", name: "Оценка" },
        image: {
            name: "Фотография",
            component: (holiday) => (
                <div className="d-flex flex-column align-items-center text-center position-relative">
                    <img
                        src={holiday.image}
                        className="rounded-circle"
                        width="650"
                    />
                </div>
            )
        }
    };

    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={holidays}
        />
    );
};

HolidaysTable.propTypes = {
    holidays: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired
    // onToggleBookMark: PropTypes.func.isRequired
};

export default HolidaysTable;
