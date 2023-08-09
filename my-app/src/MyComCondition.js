import React from 'react';
import "./App.css";

const d = new Date().getDate();

function HeadOdd() {
    return <h1>[Condition]{ d } is Odd</h1>;
}

function HeadEven() {
    return <h1>[Condition]{ d } is Even</h1>;
}

function MyComCondition() {
    if (d % 2 == 0) { return <HeadEven />; }
    else { return <HeadOdd />; }
}

export default MyComCondition