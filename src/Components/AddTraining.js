import React, { Component } from "react";

class AddTraining extends Component {
  state = {
    id: 0,
    type: "running",
    description: "easy run",
    date: "2021-08-20",
    duration: 100,
    importand: true,
    finished: false,
  };
  render() {
    return (
      <div>
        <h2>new training</h2>
        <br />

        {/* workout type */}

        <div className="form">
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="workout type"
                aria-label="workout type"
              />
            </div>

            {/* date */}

            <div className="col">
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
