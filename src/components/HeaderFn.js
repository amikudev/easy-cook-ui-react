import './Header.css';
import React from "react";

/**
 * Functional App header component, kept here just for practicing react app
 * @param props
 * @returns {JSX.Element}
 */
export default function (props) {
    return (
        <div className='app-header'>
            <h1>{props.appName}</h1>
        </div>
    )
};
