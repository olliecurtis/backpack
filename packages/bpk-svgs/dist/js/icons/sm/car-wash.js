import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M18 4.5A1.5 1.5 0 1 1 16.5 3 1.5 1.5 0 0 1 18 4.5zm2.25 6A2.25 2.25 0 1 0 18 8.25a2.25 2.25 0 0 0 2.25 2.25zM24 15.72v1.08c0 1.08 0 2.7-1 2.7h-1.25a.925.925 0 0 1-.843-.742 3.001 3.001 0 0 0-5.814 0 .925.925 0 0 1-.843.742h-4.5a.925.925 0 0 1-.843-.742 3.001 3.001 0 0 0-5.814 0 .925.925 0 0 1-.843.742H1.5v-.006a.481.481 0 0 1-.063.005h-.03a.677.677 0 0 1-.09-.003C.33 19.5.072 17.741.004 16.815a1.976 1.976 0 0 1 .225-1.043l1.658-3.058A1.29 1.29 0 0 1 3 12h11c1 0 .88-1.033.194-1.57a6.627 6.627 0 0 0-1.596-.998 8.046 8.046 0 0 0-3.061-.545 13.723 13.723 0 0 0-3.226.417 43.545 43.545 0 0 0-4.401 1.387.542.542 0 0 1-.69-.408l-.003-.012a.698.698 0 0 1 .334-.845A29.786 29.786 0 0 1 6.07 7.91a14.068 14.068 0 0 1 3.322-.409h.1a9.342 9.342 0 0 1 3.498.587 16.922 16.922 0 0 1 4.05 3.136 1.083 1.083 0 0 0 .668.31 11.953 11.953 0 0 1 4.79 1.486 3.012 3.012 0 0 1 1.5 2.7z" /><path d="M7.5 19.5A1.5 1.5 0 1 1 6 18a1.5 1.5 0 0 1 1.5 1.5zM18 21a1.5 1.5 0 1 0-1.5-1.5A1.5 1.5 0 0 0 18 21zm2.25-16.5a.75.75 0 1 0-.75-.75.75.75 0 0 0 .75.75z" /></svg>);