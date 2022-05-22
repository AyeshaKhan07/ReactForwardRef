import React, { forwardRef } from "react";
import "../styles/Counter.css"
export const Counter = forwardRef((props, ref) => (
    props.value !== 0 && console.log("component rendered!"),
    <input {...props} ref={ref} readOnly />
))