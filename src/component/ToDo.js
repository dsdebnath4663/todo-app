// App.js File
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Container from "react-bootstrap/Container";
import TableComponent from "./TableComponent";

class ToDo extends Component {
  constructor(props) {
    super(props);

    // Setting up state1
    this.state = {
      studentName: "",
      list: [],
      department: "",
      selectedlanguage: "JavaScript",
      contactNumber: 0,
      email: "",
    };
  }

  // Add item if user input in not empty
  addItem() {
    if (
      this.state.studentName !== "" &&
      this.state.department !== "" &&
      this.state.selectedlanguage !== "" &&
      this.state.contactNumber !== 0
    ) {
      const userInput = {
        // Add a random id which is used to delete
        id: Math.random(),

        // Add a user value to list
        studentName: this.state.studentName,
        department: this.state.department,
        selectedlanguage: this.state.selectedlanguage,
        contactNumber: this.state.contactNumber,
        email: this.state.email,
      };

      // Update list
      const list = [...this.state.list];
      list.push(userInput);

      // reset state
      this.setState({
        list,
        studentName: "",
        department: "",
        selectedlanguage: "HTML",
        contactNumber: 0,
        vehicle: false,
        email: "",
      });
    }
  }

  // Function to delete item from list use id to delete
  deleteItem(key) {
    const list = [...this.state.list];

    // Filter values and leave value which we need to delete
    const updateList = list.filter((item) => item.id !== key);

    // Update list in statee
    this.setState({
      list: updateList,
    });
  }

  editItem = (index) => {
    const todos = [...this.state.list];
    const editedTodo = prompt("Edit the todo:");
    if (editedTodo !== null && editedTodo.trim() !== "") {
      let updatedTodos = [...todos];
      updatedTodos[0].studentName = editedTodo;
      this.setState({
        list: updatedTodos,
      });
    }
  };
  // Set a user input value
  handleChange = (event) => {
    const { type, name, value, checked } = event.target;
    const updatedValue = type === "checkbox" ? checked : value;
    this.setState({ [name]: updatedValue });
  };

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="section">
              <form>
                <fieldset>
                  <legend class="doc">Kindly feed the form</legend>
                  <div class="row responsive-label">
                    <div class="col-sm-12 col-md-3">
                      <label for="sf1-text" class="doc">
                        Name
                      </label>
                    </div>
                    <div class="col-sm-12 col-md">
                      <input
                        type="text"
                        placeholder="Enter Name"
                        id="sf1-text"
                        class="doc inputWidth"
                        name="studentName"
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  {/* Department */}
                  <div class="row responsive-label">
                    <div class="col-sm-12 col-md-3">
                      <label for="sf1-text" class="doc">
                        Department
                      </label>
                    </div>
                    <div class="col-sm-12 col-md">
                      <select
                        name="department"
                        class="doc inputWidth"
                        id="sf1-select"
                        value={this.state.department}
                        onChange={this.handleChange}
                      >
                        <option value="">...Select Department...</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Public Relations">
                          Public Relations
                        </option>
                        <option value="Support">Support</option>
                      </select>
                    </div>
                  </div>

                  {/* Please select your favorite Web language: */}
                  <div class="row responsive-label">
                    <div class="col-sm-12 col-md-3">
                      <label for="sf1-text" class="doc">
                        language:
                      </label>
                    </div>
                    <div class="col-sm-12 col-md">
                      <input
                        type="radio"
                        class="doc "
                        id="sf1-radio"
                        name="selectedlanguage"
                        value="HTML"
                        checked={this.state.selectedlanguage === "HTML"}
                        onChange={this.handleChange}
                      />
                        <label for="html">HTML</label>
                      <br />
                      <input
                        type="radio"
                        class="doc "
                        id="sf1-radio"
                        name="selectedlanguage"
                        value="CSS"
                        checked={this.state.selectedlanguage === "CSS"}
                        onChange={this.handleChange}
                      />
                        <label for="css">CSS</label>
                      <br /> 
                      <input
                        type="radio"
                        class="doc "
                        id="sf1-radio"
                        name="selectedlanguage"
                        value="JavaScript"
                        checked={this.state.selectedlanguage === "JavaScript"}
                        onChange={this.handleChange}
                      />
                        <label for="javascript">JavaScript</label>
                    </div>
                  </div>

                  {/* contactNumber */}
                  <div class="row responsive-label">
                    <div class="col-sm-12 col-md-3">
                      <label for="sf1-text" class="doc">
                        Contact Number
                      </label>
                    </div>
                    <div class="col-sm-12 col-md">
                      <input
                        type="number"
                        placeholder="Contact Number "
                        size="lg"
                        name="contactNumber"
                        value={this.state.name}
                        onChange={this.handleChange}
                        class="doc "
                        id="sf1-num"
                      />
                    </div>
                  </div>
                  {/* Birthday */}
                  <div class="row responsive-label">
                    <div class="col-sm-12 col-md-3">
                      <label for="sf1-text" class="doc">
                        Birthday
                      </label>
                    </div>
                    <div class="col-sm-12 col-md">
                      <input
                        type="date"
                        id="birthday"
                        name="birthday"
                        value={this.state.name}
                        onChange={this.handleChange}
                        class="doc inputWidth"
                      />
                    </div>
                  </div>
                  {/* emails */}
                  <div class="row responsive-label">
                    <div class="col-sm-12 col-md-3">
                      <label for="sf1-text" class="doc">
                        Enter email address
                      </label>
                    </div>
                    <div class="col-sm-12 col-md">
                      <input
                        type="email"
                        id="emails"
                        name="email"
                        value={this.state.name}
                        onChange={this.handleChange}
                        class="doc "
                      />
                    </div>
                  </div>
                  {/* I have a bike */}
                  <div class="row responsive-label">
                    <div class="col-sm-12 col-md-3">
                      <label for="sf1-text" class="doc">
                        I have a bike
                      </label>
                    </div>
                    <div class="col-sm-12 col-md">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle"
                        value="Bike"
                        class="doc "
                      />
                    </div>
                  </div>
                  {/* I have a car */}
                  <div class="row responsive-label">
                    <div class="col-sm-12 col-md-3">
                      <label for="sf1-text" class="doc">
                        I have a car
                      </label>
                    </div>
                    <div class="col-sm-12 col-md">
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle"
                        value="Car"
                      />
                    </div>
                  </div>
                  {/*I have a boat*/}
                  <div class="row responsive-label">
                    <div class="col-sm-12 col-md-3">
                      <label for="sf1-text" class="doc">
                        I have a boat
                      </label>
                    </div>
                    <div class="col-sm-12 col-md">
                      <input
                        type="checkbox"
                        id="vehicle3"
                        name="vehicle"
                        value="Boat"
                      />
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
            {/* ADD Button */}
            <button class="primary doc" onClick={() => this.addItem()}>
              ADD
            </button>
            {/* Submit Button */}
            <input type="submit" value="Submit" /> <br />
            <br />
          </div>
          <div class="col-sm-8">
            <table class="hoverable">
              <caption>To Do List</caption>
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Department</th>
                  <th> Favorite Web language</th>
                  <th>Contact Number</th>
                  <th>Email</th>
                  <th>Delete</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {this.state.list.map((obj) => (
                  <tr>
                    <td>{obj.studentName}</td>
                    <td>{obj.department}</td>
                    <td>{obj.selectedlanguage}</td>
                    <td>{obj.contactNumber}</td>
                    <td>{obj.email}</td>

                    <td>
                      <button
                        variant="dark"
                        className="mt-2"
                        onClick={() => this.deleteItem(obj.id)}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <button
                        variant="dark"
                        className="mt-2"
                        onClick={() => this.editItem(obj.id)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDo;
