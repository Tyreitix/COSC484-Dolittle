import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

//this creates a html page that acts as the first page that loads when you go to our website
export default function Homepage() {
    return <h1>Welcome to the Home Page!</h1>;
    
}