import React from "react";
// import Header from './header.js'
// import Form from './form.js'

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      //   <>
      //     {/* <Header title={this.props.title} />
      // <Form do={this.props.action} /> */}
      //     <h4>{this.props.input}</h4>
      //   </>

      <ul>
        {this.props.todoList.map((val, i) => {
          return (
            <li key={i}>
              {val}
              <button id="delete" onClick={() => this.props.action(i)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Item;
