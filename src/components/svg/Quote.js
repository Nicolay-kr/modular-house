import React from "react";

export default function Quote({
  width = "54",
  height = "40",
}) {
  return (
    <svg
      width = {width}
      height = {height}
      viewBox="0 0 54 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M53.5 28.7933L42 38.8953V25.098V24.598H41.5H29.5V0.5H53.5V28.7933Z"
        stroke="#4F4F4F"
      />
      <path
        d="M24.5 28.7933L13 38.8953V25.098V24.598H12.5H0.5V0.5H24.5V28.7933Z"
        stroke="#4F4F4F"
      />
    </svg>
  );
}
