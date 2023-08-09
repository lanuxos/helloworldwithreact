import React from 'react';
import './App.css';

const d = new Date().getDate();

function HeadOdd() {
    return <h1>[Child Component]{ d } is Odd</h1>;
}

function HeadNotOdd() {
    return <h1>[Child Component]{ d } is not Odd</h1>;
}

function HeadEven() {
    return <h1>[Child Component]{ d } is Even</h1>;
}

function HeadNotEven() {
    return <h1>[Child Component]{ d } is not Even</h1>;
}

function MyComChild() {
    if (d % 2 === 0) {
        return <div>
            <HeadEven />
            <HeadNotOdd/>
        </div>;
    }
    else {
        return <center>
            <HeadOdd/>
            <HeadNotEven />
        </center>;
    }
}

export default MyComChild