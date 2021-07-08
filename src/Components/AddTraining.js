import React, { Component } from "react";

class AddTraining extends Component {
  state = {
    type: "",
    description: "",
    date: "2021-08-20",
    duration: "",
    importand: false,
  };
  render() {
    return (
      <div>
        <h2>new training</h2>
        <br />

        {/* workout type */}

        <div className="form">
          <div className="row">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="workout type"
                aria-label="workout type"
              />
            </div>

            {/* duration */}

            <div className="col-2 duration">
              <input
                type="number"
                className="form-control duration"
                placeholder="minutes"
                aria-label="workout type"
              />
            </div>

            {/* date */}

            <div className="col-4">
              <input
                type="date"
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
          </div>

          <br />

          {/* training description */}

          <div className="row">
            <div className="form-floating descriptionInput col">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
              ></textarea>
              <label className="detailsLabel" htmlFor="floatingTextarea">
                training details
              </label>
            </div>

            {/* important checkbox */}

            <div className="form-check form-switch col">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                important workout
              </label>
            </div>
          </div>
        </div>
        <br />
        <button type="button" className="btn btn-info">
          add training
        </button>
      </div>
    );
  }
}

export default AddTraining;
