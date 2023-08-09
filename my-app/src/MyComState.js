import React from 'react'

class MyComState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'anonymous',
            age: '80'
        };
    }
    render() {
        return <div>
            <p>[state]Name: {this.state.name}</p>
            <p>[state]Age: {this.state.age}</p>
        </div>;
    }
}
export default MyComState