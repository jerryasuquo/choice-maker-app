import React from "react";

export const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Options</h3>
      <button
        className="button button__links"
        disabled={props.hasOptions}
        onClick={props.removeOptions}
      >
        Remove All
      </button>
    </div>

    {props.hasOptions && (
      <p className="widget__message">Add Option to Get Started</p>
    )}

    {props.options.map((option, index) => (
      <Option
        optionCount={index + 1}
        removeSingleOption={props.removeSingleOption}
        key={index}
        option={option}
      />
    ))}
  </div>
);

const Option = (props) => (
  <div className="option">
    <p className="option__text">
      {props.optionCount}. {props.option}
    </p>
    <button
      className="button__links"
      onClick={() => props.removeSingleOption(props.option)}
    >
      Remove
    </button>
  </div>
);
