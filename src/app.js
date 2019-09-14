import React from "react";

import "./styles.css";

import Item from "./components/item.js";
import Header from "./components/header.js";
import Form from "./components/form.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      todoList: [],
      counter: 0
    };
  }

  sayIt = string => {
    // this.setState({input: string})
    // this.setState(this.props.todoList)
    this.setState({ todoList: [...this.state.todoList, string] });
    let counter = this.state.counter + 1;
    this.setState({ counter });
  };

  deleteIt = idx => {
    this.state.todoList.splice(idx, 1);
    this.setState({ todoList: this.state.todoList });
    let counter = this.state.counter - 1;
    this.setState({ counter });
  };

  render() {
    const counter = this.state.counter;
    return (
      // <Item
      //   title="There are x todoList to complete"
      //   action={this.sayIt}
      //   input={this.state.input}
      // />
      <>
        <Header title={"There are " + counter + " items to complete!"} />
        <Form action={this.sayIt} todoList={this.state.todoList} />
        <Item action={this.deleteIt} todoList={this.state.todoList} />
      </>
    );
  }
}

export default App;
