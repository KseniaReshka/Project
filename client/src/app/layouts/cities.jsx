import React from "react";
import HolidayList from "../components/page/holidayPage/holidayList";
import HolidayPage from "../components/page/holidayPage/holidayPage";
import { useParams } from "react-router-dom";

const Cities = () => {
    const params = useParams();
    const { holidayId } = params;
    return (
        <>
            {holidayId ? (
                <HolidayPage holidayId={holidayId} />
            ) : (
                <HolidayList />
            )}
        </>
    );
};

export default Cities;
