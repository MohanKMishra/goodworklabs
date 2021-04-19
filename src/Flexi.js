import React from "react";
import CustomComponent from "./Components/CustomComponent";
// import data from "./data/data.json";
// import "./App.css";
const Flexi = (props) => {

  return (
    <form onSubmit={props.onSubmit}>
      <div className="form">
        {props.config.map((e,i) => {
          return <CustomComponent data={e} key={i} />;
        })}
        <button>Submit</button>
      </div>
    </form>
  );
};
export default Flexi;
