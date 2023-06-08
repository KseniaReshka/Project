import React from "react";
import PropTypes from "prop-types";
const StatusOfCity = ({ length }) => {
    const renderPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1));
        if (number > 4 && number < 15) {
            return "городов";
        }
        if (lastOne === 1) return "город";
        if ([2, 3, 4].indexOf(lastOne) >= 0) return "города";
        return "городов ";
    };
    return (
        <h2>
            <span
                className={"badge " + (length > 0 ? "bg-primary" : "bg-danger")}
            >
                {length > 0
                    ? `${
                          length + " " + renderPhrase(length)
                      }   интересно посетить в ближайщие 3 дня`
                    : "нет городов для посещение в ближайшее время"}
            </span>
        </h2>
    );
};
StatusOfCity.propTypes = {
    length: PropTypes.number
};

export default StatusOfCity;
