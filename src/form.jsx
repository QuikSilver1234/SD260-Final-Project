import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = () => {
    this.props.passData(this.props.value);
  };
  render() {
    return (
      <div className="formWrapper">
        <form className="form" id="form">
          <input
            className="input-field"
            type="text"
            value={this.props.value}
            onChange={e => this.props.handleChange(e.target.value)}
            placeholder="Say something..."
          />
          <button
            onClick={e => {
              e.preventDefault();
              this.handleSubmit(e);
            }}
          >
            Post
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
