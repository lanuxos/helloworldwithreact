import React from 'react'

class MyComPropsDefault extends React.Component {
    render() {
        return <div>
            <h1>[defaultProps]Name: {this.props.name}</h1>
            <h2>[defaultProps]Age: {this.props.age}</h2>
        </div>;
    }
}
MyComPropsDefault.defaultProps = {
    name: 'anonymous',
    age: 18
}

export default MyComPropsDefault