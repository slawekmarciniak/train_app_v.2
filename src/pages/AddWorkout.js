import React, { Component } from "react";

class AddWorkout extends Component {
  date = new Date().toISOString().slice(0, 10);
  state = {
    type: "",
    description: "",
    date: this.date,
    minutes: "",
    hours: "",
    important: false,
  };

  handleInputsChange = (e) => {
    const name = e.target.name;

    if (name === "important") {
      this.setState({
        [name]: !this.state.important,
      });
    } else {
      this.setState({
        [name]: e.target.value,
      });
    }
  };

  formValidation = () => {
    const { type, description, minutes, hours } = this.state;
    if (type && description && minutes && hours) {
      return true;
    }
  };

  handleFormButton = () => {
    const validation = this.formValidation();
    if (validation) {
      const addTraining = this.props.addTraining(this.state);
      if (addTraining === true) {
        this.setState({
          type: "",
          description: "",
          date: this.date,
          minutes: "",
          hours: "",
          important: false,
        });
      }
    }
  };

  render() {
    return (
      <div>
        <h2>new training</h2>
        <br />
        <form>
          <div className="row">
            <div className="col-6">
              <input
                name="type"
                onChange={this.handleInputsChange}
                type="text"
                className="form-control"
                placeholder="workout type"
                aria-label="workout type"
                value={this.state.type}
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
                value={this.state.hours}
                onChange={this.handleInputsChange}
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
                value={this.state.minutes}
                onChange={this.handleInputsChange}
                required
              />
            </div>

            {/* date */}

            <div className="col-4">
              <input
                name="date"
                value={this.state.date}
                type="date"
                className="form-control"
                aria-label="date"
                onChange={this.handleInputsChange}
              />
            </div>
          </div>

          <br />

          {/* training description */}

          <div className="row">
            <div className="form-floating descriptionInput col">
              <textarea
                name="description"
                value={this.state.description}
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                onChange={this.handleInputsChange}
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
                value={this.state.important}
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onChange={this.handleInputsChange}
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
            onClick={this.handleFormButton}
            type="submit"
            className="btn btn-info"
          >
            add training
          </button>
        </form>
        <br />
      </div>
    );
  }
}

export default AddWorkout;
