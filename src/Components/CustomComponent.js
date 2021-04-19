import React, { useState } from "react";

const CustomComponent = (props) => {
  // const [input, setInput] = useState("");
  // const [state, setState] = useState("k ");
  // console.log(state);
  // console.log(input);
  // const handleInput = (e) => {
  //   setInput(e.target.value);
  // };
  // const handleOption = (e) => {
  //   setState(e.target.value);
  // };
  return (
    <div>
      {props.data.type === "TextField" && (
        <div className="label">
          {props.data.label}
          <input type="TextField" 
          // onChange={handleInput}
           />
        </div>
      )}
      {props.data.type === "DropDown" && (
        <div className="state">
          <div className="label">
            {props.data.label}
            <select className="select">
              {props.data.values.map((e,i) => {
                return <option key={i} 
                // onSelect={handleOption}
                >{e}</option>;
              })}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};
export default CustomComponent;
