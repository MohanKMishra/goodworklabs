import React, { useState } from "react";
const CustomComponent = (props) => {
  return (
    <div>
      {props.data.type === "TextField" && (
        <div className="label">
          {props.data.label}
          <input type="TextField" />
        </div>
      )}
      {props.data.type === "DropDown" && (
        <div className="state">
          <div className="label">
            {props.data.label}
            <select className="select">
              {props.data.values.map((e, i) => {
                return <option key={i}>{e}</option>;
              })}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};
export default CustomComponent;
