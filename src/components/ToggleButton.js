import React from "react";

export default ({ handleOnClick, handleState, text, isDark }) => {
  const svgStyle = isDark ? {fill: "var(--ash)"} : {}
  const iconDarkMode = (<svg style={svgStyle} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z"/></svg>);
  
  return (
  <div id="toggle">
    <label className="switch">
      <input checked={handleState} type="checkbox" onChange={handleOnClick} />
      <span className="slider"></span>
    </label>
    <p id="toggleLabel" className={isDark ? "dark" : ""}>
      {/* {text} {subline && <span id="subline">{subline}</span>} */}
      {text === "Dark Mode" ? iconDarkMode : <span id="strike">{text}</span>}
    </p>
  </div>
)};
