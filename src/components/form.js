import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      todoList: this.props.todoList
    };
  }

  bananaHandler = event => {
    event.preventDefault();
    this.props.action(this.state.current);
    this.setState({ current: "" });
  };

  bananaCapture = event => {
    let current = event.target.value;
    // this.todoList.push(current);
    this.setState({ current });
  };

  render() {
    return (
      <form id="submitForm" onSubmit={this.bananaHandler}>
        <input
          onChange={this.bananaCapture}
          placeholder="Add To Do List Item"
        />{" "}
      </form>
    );
  }
}

export default Form;
