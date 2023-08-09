import React from 'react'

function Row(props) {
    return <li>{props.name}, {props.age} year(s) old [index: {props.index}].</li>;
}

class MyComStateMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [
                {name: 'first', age: 10},
                {name: 'second', age: 20},
                {name: 'third', age: 30},
                {name: 'forth', age: 40},
                {name: 'fifth', age: 50},
            ]
        };
    }
    render() {
        return <ol>
            {this.state.people.map((ele, index) => <Row name={ele.name} age={ele.age} index={index}/>)}
        </ol>;
    }
}
export default MyComStateMap