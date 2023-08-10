import React from 'react'
import ReactDOM from 'react-dom'

class MyComNode extends React.Component {
    change(e) {
        const node = ReactDOM.findDOMNode(this.refs.display);
        const y = e.target.value;
        node.innerHTML = `Age ${y} year(s) old.`
    }
    render() {
        return <div>
            <p ref='display'>[Node] Age 18 years old</p>
            <input type='range' min='1' max='100' onChange={this.change.bind(this)} />
        </div>;
    }
}
export default MyComNode