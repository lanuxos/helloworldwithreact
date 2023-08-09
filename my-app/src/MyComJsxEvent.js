import React from 'react'

class MyComJsxEvent extends React.Component {
    say() {
        alert('Hello react')
    }
    render() {
        return <div>
            <button onClick={this.say}>Click me</button>
        </div>
    }
}
export default MyComJsxEvent