import React from 'react'

function Head1 (props) {
    return <h1>[propsFunctionBased]Name: {props.name}</h1>;
}

function Head2 (props) {
    return <h2>[propsFunctionBased]Age: {props.age}</h2>;
}

class MyComProps extends React.Component {
    render() {
        return <div>
            <Head1 name='anonymous'/>
            <Head2 age={ 90 } />
        </div>;
    }
}

export default MyComProps