import React from "react";

import "../styles/Fact.scss";

function Fact({ id, desc }) {
  return (
    <div className="fact">
      <h6 className="fact__id">{id}</h6>
      <p className="fact__desc">{desc}</p>
    </div>
  );
}

export default Fact;
