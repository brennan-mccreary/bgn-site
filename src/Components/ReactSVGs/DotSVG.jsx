// icon:circle-dot | Fontawesome https://fontawesome.com/ | Fontawesome
import * as React from "react";

function DotSVG(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
    </svg>
  );
}

export default DotSVG;
