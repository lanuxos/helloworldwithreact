import React from 'react'

class MyComJsxEvent_ extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
        }
        this.increase = this.increase.bind(this);
    }
    increase(e) {
        this.setState({ count: ++this.state.count });
    }
    render() {
        return <div>
            <p>CountOnClick {this.state.count}</p>
            <button onClick={this.increase}>ClickToIncrease</button>
        </div>
    }
}
export default MyComJsxEvent_