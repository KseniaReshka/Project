import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { paginate } from "../../../utils/paginate";
import Pagination from "../../common/pagination";
import GroupList from "../../common/groupListOfSity";
import Status from "../../ui/statusOfCity";
import HolidaysTable from "../../ui/holidays/holidaysTable";
import _ from "lodash";
import { useSelector } from "react-redux";
import { getCities } from "../../../store/cities";
import { getholidayList, getHolidayById } from "../../../store/holiday";

const HolidayListPage = () => {
    const holidays = useSelector(getholidayList());
    const holidayId = useSelector(getHolidayById());
    const cities = useSelector(getCities());
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCity, setSelectedCity] = useState();
    const [sortBy, setSortBy] = useState({ path: "city", order: "asc" });
    const pageSize = 4;

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCity, searchQuery]);

    const handleCitySelect = (item) => {
        if (searchQuery !== "") setSearchQuery("");
        setSelectedCity(item.city.toString());
    };
    const handleSearchQuery = ({ target }) => {
        setSelectedCity(undefined);
        setSearchQuery(target.value);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const handleSort = (item) => {
        setSortBy(item);
    };

    if (holidays) {
        function filterholidays(data) {
            const filteredholidays = searchQuery
                ? data.filter(
                      (holiday) =>
                          holiday.city
                              .toLowerCase()
                              .indexOf(searchQuery.toLowerCase()) !== -1
                  )
                : selectedCity
                ? data.filter(
                      (holiday) =>
                          JSON.stringify(holiday.city) ===
                          JSON.stringify(selectedCity)
                  )
                : data;
            return filteredholidays.filter((h) => h._id !== holidayId);
        }
        const filteredholidays = filterholidays(holidays);
        const count = filteredholidays.length;
        const sortedCity = _.orderBy(
            filteredholidays,
            [sortBy.path],
            [sortBy.order]
        );
        const holidaysCrop = paginate(sortedCity, currentPage, pageSize);
        const clearFilter = () => {
            setSelectedCity();
        };

        return (
            <div className="d-flex">
                {cities && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <p>Найди мероприятия в любимом городе</p>
                        <GroupList
                            selectedItem={selectedCity}
                            items={cities}
                            onItemSelect={handleCitySelect}
                        />
                        <button
                            className="btn btn-secondary mt-2"
                            onClick={clearFilter}
                        >
                            {" "}
                            Очистить
                        </button>
                    </div>
                )}
                {
                    <div className="d-flex flex-column">
                        <Status length={count} />
                        <input
                            type="text"
                            name="searchQuery"
                            placeholder="Search..."
                            onChange={handleSearchQuery}
                            value={searchQuery}
                        />
                        {count > 0 && (
                            <HolidaysTable
                                holidays={holidaysCrop}
                                onSort={handleSort}
                                selectedSort={sortBy}
                            />
                        )}
                        <div className="d-flex justify-content-center">
                            <Pagination
                                itemsCount={count}
                                pageSize={pageSize}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    </div>
                }
            </div>
        );
    }
    return "loading...";
};
HolidayListPage.propTypes = {
    holidays: PropTypes.array
};

export default HolidayListPage;
