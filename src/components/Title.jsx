import { useState } from "react";

export default function Title({activeBtn,handleBtnChange}) {
  
  const buttonsList = ["All", "Active", "Inactive"];

  return (
    <section className="titleSection">
      <h1>Extensions List</h1>
      <div className="btn-group">
        {buttonsList.map((btn, index) => (
          <button
            data-state={index === activeBtn ? "active" : ""}
            onClick={() => handleBtnChange(index)}
          >
            {btn}
          </button>
        ))}
      </div>
    </section>
  );
}
