import React, { Component } from "react";
import { Header } from "./components/Header";
import { Action } from "./components/Action";
import { Options } from "./components/Options";
import { AddOption } from "./components/Addoption";
import { OptionModal } from "./components/OptionModal";

class DecisionEngine extends Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };
  handleChooseOption = () => {
    const randIdx = Math.floor(Math.random() * this.state.options.length);
    const randOption = this.state.options[randIdx];
    this.setState(() => ({ selectedOption: randOption }));
  };
  handleRemoveOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handleRemoveOptionSingular = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      }),
    }));
  };
  handleAddOption = (option) => {
    if (!option) {
      return "Please Enter an Option";
    } else if (this.state.options.indexOf(option) > -1) {
      return "That Option Already Exists";
    } else {
      this.setState((prevState) => ({
        options: prevState.options.concat(option),
      }));
    }
  };

  componentDidMount() {
    const options = JSON.parse(localStorage.getItem("options"));
    if (options) {
      this.setState(() => ({ options }));
    }
  }
  componentDidUpdate() {
    const json = JSON.stringify(this.state.options);
    localStorage.setItem("options", json);
  }
  render() {
    const heading = "Simple Decision Maker";
    return (
      <div>
        <Header heading={heading} />
        <div className="container">
          <Action
            removeOptions={this.handleRemoveOptions}
            chooseOption={this.handleChooseOption}
            hasOptions={!this.state.options.length > 0}
          />
          <div className="widget">
            <Options
              hasOptions={!this.state.options.length > 0}
              removeOptions={this.handleRemoveOptions}
              removeSingleOption={this.handleRemoveOptionSingular}
              options={this.state.options}
            />
            <AddOption
              hasOptions={!this.state.options.length > 0}
              addOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          clearOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

export default DecisionEngine;
