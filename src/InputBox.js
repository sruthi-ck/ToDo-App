import React from "react";
import { SomeReactstrapComponent } from 'reactstrap';

const InputBox = props => {
  return (
    <div className="task-input">
      <input placeholder={props.placeholder} name={props.itemName} />
    </div>
  );
};

export default InputBox;
