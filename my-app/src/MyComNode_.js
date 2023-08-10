import React from 'react'
import ReactDOM from 'react-dom'

class MyComNode_ extends React.Component {
    change(e) {
        const nodeP = document.getElementById('display')
        const node = ReactDOM.findDOMNode(nodeP)
        const y = e.target.value;
        node.innerHTML = `Age ${y} year(s) old.`
    }
    render() {
        return <div>
            <p id='display'>[Node] Age_ 1 years old</p>
            <input type='range' min='1' max='100' onChange={this.change.bind(this)} />
        </div>;
    }
}
export default MyComNode_