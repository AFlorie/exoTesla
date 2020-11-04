import React from "react";

const Section = (props) => {
  //console.log(props);
  return (
    <section>
      <h2>{props.title}</h2>
      <div
        className={`${props.select ? "select" : "none"}`}
        onClick={() => {
          props.setSelect(true);
          props.setPrice(props.price1.replace(" ", ""));
        }}
      >
        {props.option1} - {props.price1} €
      </div>
      <div
        className={`${props.select === false ? "select" : "none"}`}
        onClick={() => {
          props.setSelect(false);
          props.setPrice(props.price2.replace(" ", ""));
        }}
      >
        {props.option2} - {props.price2} €
      </div>
    </section>
  );
};

export default Section;
