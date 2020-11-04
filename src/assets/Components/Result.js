import React from "react";

const Result = (props) => {
  // console.log(props);

  return (
    <div className="result">
      <span>{parseInt(props.prix1) + parseInt(props.prix2)}</span>
      <button
        onClick={() => {
          alert("Thanks for clicking !");
        }}
      >
        Buy !
      </button>
    </div>
  );
};

export default Result;
