import React, { useState } from "react";

const AddWorkout = ({ addNewTraining }) => {
  const defaultDate = new Date().toISOString().slice(0, 10);

  const [date, setDate] = useState(defaultDate);
  const [description, setDescription] = useState("");
  const [hours, setHours] = useState("");
  const [important, setImportant] = useState("");
  const [minutes, setMinutes] = useState("");
  const [type, setType] = useState("");

  const handleInputsChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "important") {
      setImportant((prevValue) => !prevValue);
    } else if (name === "type") {
      setType(value);
    } else if (name === "description") {
      setDescription(value);
    } else if (name === "date") {
      setDate(value);
    } else if (name === "minutes") {
      setMinutes(value);
    } else if (name === "hours") {
      setHours(value);
    }
  };

  const formValidation = () => {
    if (type && description && minutes && hours) {
      return true;
    }
  };

  const handleFormButton = () => {
    if (formValidation) {
      const addTraining = addNewTraining({
        type,
        description,
        date,
        minutes,
        hours,
        important,
      });
      if (addTraining === true) {
        setType("");
        setDescription("");
        setDate(defaultDate);
        setMinutes("");
        setHours("");
        setImportant("");
      }
    }
  };

  return (
    <div>
      <h5 className="pageHeader">new training</h5>
      <br />
      <form>
        <div className="row">
          <div className="col-6">
            <input
              name="type"
              onChange={handleInputsChange}
              type="text"
              className="form-control"
              placeholder="workout type"
              aria-label="workout type"
              value={type}
              required
            />
          </div>

          {/* duration */}

          <div className="col-1 duration">
            <input
              name="hours"
              type="number"
              className="form-control duration"
              placeholder="h"
              aria-label="workout type"
              min="0"
              value={hours}
              onChange={handleInputsChange}
              required
            />
          </div>

          <div className="col-1 duration">
            <input
              name="minutes"
              type="number"
              className="form-control duration"
              placeholder="m"
              aria-label="workout type"
              min="0"
              max="60"
              value={minutes}
              onChange={handleInputsChange}
              required
            />
          </div>

          {/* date */}

          <div className="col-4">
            <input
              name="date"
              value={date}
              type="date"
              className="form-control"
              aria-label="date"
              onChange={handleInputsChange}
            />
          </div>
        </div>

        <br />

        {/* training description */}

        <div className="row">
          <div className="form-floating descriptionInput col">
            <textarea
              name="description"
              value={description}
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              onChange={handleInputsChange}
              required
            ></textarea>
            <label className="detailsLabel" htmlFor="floatingTextarea">
              training details
            </label>
          </div>

          {/* important checkbox */}

          <div className="form-check form-switch col">
            <input
              name="important"
              value={important}
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onChange={handleInputsChange}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              important workout
            </label>
          </div>
        </div>
        <br />
        <button
          onClick={handleFormButton}
          type="submit"
          className="btn btn-info"
        >
          add training
        </button>
      </form>
      <br />
    </div>
  );
};

export default AddWorkout;
