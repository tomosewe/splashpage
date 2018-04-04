import React from "react";

const IconLink = props => (
  <li>
    <a
      href={props.url}
      className={`icon ${props.iconClass}`}
      title={props.titleText}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="label">{props.titleText}</span>
    </a>
  </li>
);

export default IconLink;
