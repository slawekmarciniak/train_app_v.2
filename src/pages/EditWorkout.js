import React, { useState, useContext } from "react";
import { AppContext } from "../layoutes/AppContext";

const EditWorkout = ({ saveEdit }) => {
  const { editingWorkout } = useContext(AppContext);

  const [date, setDate] = useState(editingWorkout.date);
  const [description, setDescription] = useState(editingWorkout.description);
  const [hours, setHours] = useState(editingWorkout.hours);
  const [important, setImportant] = useState(editingWorkout.important);
  const [minutes, setMinutes] = useState(editingWorkout.minutes);
  const [type, setType] = useState(editingWorkout.type);

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

  const handleFormButton = (e) => {
    e.preventDefault();
    if (formValidation) {
      const edit = saveEdit({
        id: editingWorkout.id,
        type,
        description,
        date,
        minutes,
        hours,
        important,
      });
      if (edit === true) {
        setType("");
        setDescription("");
        setDate("");
        setMinutes("");
        setHours("");
        setImportant("");
      }
    }
  };

  return (
    <div>
      <h5 className="pageHeader">EDIT WORKOUT</h5>
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
        </div>
        <br />

        <div className="row">
          <div className="col-3">
            <input
              name="hours"
              type="number"
              className="form-control"
              placeholder="hours"
              aria-label="workout type"
              min="0"
              value={hours}
              onChange={handleInputsChange}
              required
            />
          </div>

          <div className="col-3">
            <input
              name="minutes"
              type="number"
              className="form-control"
              placeholder="minutes"
              aria-label="workout type"
              min="0"
              max="60"
              value={minutes}
              onChange={handleInputsChange}
              required
            />
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-3">
            <input
              name="date"
              value={date}
              type="date"
              className="form-control"
              aria-label="date"
              onChange={handleInputsChange}
            />
          </div>
          <div className="form-check form-switch col-3">
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

        <div className="row">
          <div className="form-floating descriptionInput col-6">
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
        </div>
        <br />
        <button
          onClick={handleFormButton}
          type="submit"
          className="btn btn-info"
        >
          save
        </button>
      </form>
      <br />
    </div>
  );
};

export default EditWorkout;
