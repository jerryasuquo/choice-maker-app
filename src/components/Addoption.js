import React, { Component } from "react";

class AddOption extends Component {
  state = {
    error: undefined,
  };

  handleAddOption = (e) => {
    e.preventDefault();
    const input = e.target.option.value.trim();
    const error = this.props.addOption(input);
    if (!error) {
      e.target.option.value = "";
    }
    this.setState(() => ({ error }));
  };
  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="add-button">Add Option</button>
        </form>
      </div>
    );
  }
}

export { AddOption };
