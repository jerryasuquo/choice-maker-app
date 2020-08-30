import React from "react";

export const Action = (props) => (
  <div>
    <h2 className="header-info">Simple Decision Maker</h2>
    <p className="header-text">
      When the decision is too hard or too easy use the Simple Decision Maker
    </p>
    <button
      className="large-button"
      disabled={props.hasOptions}
      onClick={props.chooseOption}
    >
      Answer!
    </button>
  </div>
);
