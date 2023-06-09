import React, { useState } from "react";
// import TextAreaField from "../form/textAreaField";
import { validator } from "../../../utils/validator";
// import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { createCity, getCities, removeCity } from "../../../store/cities";
import getRandomInt from "../../../utils/getRandomInt";

const NewCityForm = () => {
    const [value, setValue] = useState("");

    // const [data, setData] = useState({});
    // const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const cities = useSelector(getCities());
    console.log("cities", cities);
    // const handleChange = (target) => {
    //     setData((prevState) => ({
    //         ...prevState,
    //         [target.name]: target.value
    //     }));
    //     console.log("datatatat", data);
    // };
    // function removedCity(id) {
    //     console.log("ID", id);
    //     dispatch(removeCity(id));
    // }
    // const validatorConfig = {
    //     content: {
    //         isRequired: {
    //             message: "Сообщение не может быть пустым"
    //         }
    //     }
    // };

    // const validate = () => {
    //     const errors = validator(data, validatorConfig);
    //     setErrors(errors);
    //     return Object.keys(errors).length === 0;
    // };
    const clearForm = () => {
        setValue("");
        // setErrors({});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("value", value);
        // const isValid = validate();
        // if (!isValid) return;
        const content = {
            name: getRandomInt(1, 1500085).toString(),
            city: value
        };
        dispatch(createCity(content));
        // onSubmit(data);
        clearForm();
    };
    return (
        <div>
            <h2>
                Введи название города в котором мечтаешь побывать, если его нет
                в списке
            </h2>
            <form onSubmit={handleSubmit}>
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />

                {/* <div className="d-flex justify-content-end"> */}
                <button type="submit" className="btn btn-primary">
                    Создать{" "}
                </button>
            </form>

            {cities
                ? cities.map((el) => (
                      <div key={el._id} className="container mt-5">
                          <div className="btn btn-m2">
                              <h2>{el.city}</h2>
                              {/* <button onClick={() => removedCity(el._id)}>
                                      <i className="bi bi-backspace-fill"></i>
                                  </button> */}
                          </div>
                      </div>
                  ))
                : "loading"}
        </div>
    );
};
// NewCityForm.propTypes = {
//     onSubmit: PropTypes.func
// };

export default NewCityForm;
