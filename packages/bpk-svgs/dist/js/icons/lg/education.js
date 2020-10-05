import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M2.61 7.076l7.796-4.644a3.073 3.073 0 0 1 3.188 0l7.796 4.644a1.309 1.309 0 0 1 .61 1.14v6.77a1 1 0 0 1-2 0v-3.301a1 1 0 0 0-1.485-.875l-5.05 2.803a3.066 3.066 0 0 1-2.93 0L2.652 9.387a1.373 1.373 0 0 1-.043-2.31z" /><path d="M17.288 13.82a.5.5 0 0 1 .712.453v4.595a1 1 0 0 1-.553.894l-3.658 1.83a4 4 0 0 1-3.578 0L4.553 18.88A1 1 0 0 1 4 17.986v-5a.5.5 0 0 1 .736-.44l5.798 3.067a3.066 3.066 0 0 0 2.931 0z" /></svg>);