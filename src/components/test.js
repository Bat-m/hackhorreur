import React, { Component } from "react";
import "./QuoteForm.css";

const MAX_LENGTH = 10; // You can change the value

class MyTitleForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "Awesome Title", character: "" };
  }

  handleChange = event => {
    if (
      !event.target.value.includes("*") &&
      event.target.value.length <= MAX_LENGTH
    ) {
      this.setState({ character: event.target.value });
    }
  };

  render() {
    let max = this.state.character.length >= MAX_LENGTH;
    let rest = MAX_LENGTH - this.state.character.length;
    return (
      <div className="QuoteForm">
        <h1>{this.state.character}</h1>
        <label htmlFor="title">Hop :</label>
        <input
          id="title"
          type="text"
          value={this.state.character}
          onChange={this.handleChange}
          className={max ? "length-maximum-reached" : "length-ok"}
        />
        <div>
          {" "}
          Il reste {rest} charactère{rest <= 1 ? "" : "s"} disponible
        </div>
      </div>
    );
  }
}

export default MyTitleForm;
