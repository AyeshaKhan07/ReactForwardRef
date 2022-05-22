import React, { forwardRef } from "react";
import "../styles/Counter.css"
export const Counter = forwardRef((props, ref) => (
    console.log("component rendered!"),
    <input {...props} ref={ref} readOnly />
))