import React from "react";

const UL = props => {
  return (
    <ul style={{ listStyle: "none", padding: "32px 0" }}>{props.children}</ul>
  );
};

const LI = props => {
  console.log(props);
  return (
    <h2 style={{ margin: "24px 0", ...props.style }}>
      <li>{props.children}</li>
    </h2>
  );
};

export { UL, LI };
