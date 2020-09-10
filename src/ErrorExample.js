import React, { useEffect } from "react";

export default function(props) {
  setTimeout(() => {
    props.functionThatDoesNotExist();
  }, 5000);
  return <div>This component is designed to throw errors every 5 seconds</div>;
}