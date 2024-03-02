// App.js File
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
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
    };
  }

  // Add item if user input in not empty
  addItem() {
    if (
      this.state.studentName !== "" &&
      this.state.department !== "" &&
      this.state.selectedlanguage !== ""
    ) {
      const userInput = {
        // Add a random id which is used to delete
        id: Math.random(),

        // Add a user value to list
        studentName: this.state.studentName,
        department: this.state.department,
        selectedlanguage: this.state.selectedlanguage,
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
      });
    }
  }

  // Function to delete item from list use id to delete
  deleteItem(key) {
    const list = [...this.state.list];

    // Filter values and leave value which we need to delete
    const updateList = list.filter((item) => item.id !== key);

    // Update list in state
    this.setState({
      list: updateList,
    });
  }

  editItem = (index) => {
    const todos = [...this.state.list];
    const editedTodo = prompt("Edit the todo:");
    if (editedTodo !== null && editedTodo.trim() !== "") {
      let updatedTodos = [...todos];
      updatedTodos[index].value = editedTodo;
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
      <Container>
        <h2>Kindly feed the form</h2>
        <hr />
        {/* Name */}
        <label for="fname">Name:</label>
        <br />
        <input
          type="text "
          placeholder="add item . . . "
          size="lg"
          name="studentName"
          value={this.state.name}
          onChange={this.handleChange}
        />{" "}
        <br />
        {/* Department */}
        <label for="fname">Department:</label>
        <br />
        <select
          name="department"
          value={this.state.department}
          onChange={this.handleChange}
        >
          <option value="">...Select...</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Public Relations">Public Relations</option>
          <option value="Support">Support</option>
        </select>
        <br /> <br />
        {/* Radio Button */}
        <p>Please select your favorite Web language:</p> {" "}
        <input
          type="radio"
          id="html"
          name="selectedlanguage"
          value="HTML"
          checked={this.state.selectedlanguage === "HTML"}
          onChange={this.handleChange}
        />
          <label for="html">HTML</label>
        <br /> {" "}
        <input
          type="radio"
          id="css"
          name="selectedlanguage"
          value="CSS"
          checked={this.state.selectedlanguage === "CSS"}
          onChange={this.handleChange}
        />
          <label for="css">CSS</label>
        <br /> {" "}
        <input
          type="radio"
          id="javascript"
          name="selectedlanguage"
          value="JavaScript"
          checked={this.state.selectedlanguage === "JavaScript"}
          onChange={this.handleChange}
        />
          <label for="javascript">JavaScript</label>
        <br /> 
        <br /> {/* ADD Button */}
        <button variant="dark" className="mt-2" onClick={() => this.addItem()}>
          ADD
        </button>
        {/* Submit Button */}
        <input type="submit" value="Submit" /> <br />
        <br />
        <TableComponent item={this.state.list} />
      </Container>
    );
  }
}

export default ToDo;
