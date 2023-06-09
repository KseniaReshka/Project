import React, { useState } from "react";
// import TextAreaField from "../form/textAreaField";
import { validator } from "../../../utils/validator";
// import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { createCity, getCities, removeCity } from "../../../store/cities";
import getRandomInt from "../../../utils/getRandomInt";

const NewCityForm = () => {
    const [value, setValue] = useState("");
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const cities = useSelector(getCities());
    console.log("errors", errors);

    function removedCity(id) {
        console.log("ID", id);
        dispatch(removeCity(id));
    }
    const validatorConfig = {
        content: {
            isRequired: {
                message: "Сообщение не может быть пустым"
            }
        }
    };

    const validate = () => {
        const errors = validator(value, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const clearForm = () => {
        setValue("");
        setErrors({});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("value", value);
        const isValid = validate();
        if (!isValid) return;
        const content = {
            name: getRandomInt(1, 1500085).toString(),
            city: value
        };
        dispatch(createCity(content));
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
                <button type="submit" className="btn btn-primary">
                    Создать{" "}
                </button>
            </form>

            {cities
                ? cities.map((el) => (
                      <div key={el._id} className="container mt-5">
                          <div className="btn btn-m2">
                              <h2>{el.city}</h2>
                              <button onClick={() => removedCity(el._id)}>
                                  <i className="bi bi-backspace-fill"></i>
                              </button>
                          </div>
                      </div>
                  ))
                : "loading"}
        </div>
    );
};

export default NewCityForm;
