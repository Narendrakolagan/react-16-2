import {Component} from 'react'

import './index.css'

class Appointments extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="appointment-card">
          <div className="add-appointment-container">
            <div className="appointment-container">
              <form className="form">
                <h1 className="main-heading">Add Appointment</h1>
                <label htmlFor="title" className="label">
                  Title
                </label>
                <br />
                <input
                  type="text"
                  id="title"
                  placeholder="Title"
                  className="input"
                />
                <br />
                <label htmlFor="date" className="date-label">
                  Date
                </label>
                <br />
                <input type="date" className="input" />
                <br />
                <button type="button" className="add-button">
                  Add
                </button>
              </form>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="appointment-img"
              />
            </div>
            <hr />
            <div className="header-with-filter-container">
              <h1 className="appointments-heading">Appointments</h1>
              <button type="button" className="submit-button">
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
