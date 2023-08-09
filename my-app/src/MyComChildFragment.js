import React from 'react';
import "./App.css";

const d = new Date().getDate();

function HeadOdd() {
    return <h1>[React.Fragment Child Component]{ d } is Odd</h1>;
}

function HeadNotOdd() {
    return <h1>[React.Fragment Child Component]{ d } is not Odd</h1>;
}

function HeadEven() {
    return <h1>[React.Fragment Child Component]{ d } is Even</h1>;
}

function HeadNotEven() {
    return <h1>[React.Fragment Child Component]{ d } is not Even</h1>;
}

function MyComChildFragment() {
    if (d % 2 == 0) {
        return <React.Fragment>
            <HeadEven />
            <HeadNotOdd/>
        </React.Fragment>;
    }
    else {
        return <React.Fragment>
            <HeadOdd/>
            <HeadNotEven />
        </React.Fragment>;
    }
}

export default MyComChildFragment