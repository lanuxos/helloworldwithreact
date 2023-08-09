import React from 'react'

function Head1(props) {
    return <p>Count_ {props.count} [change every 2 sec]</p>;
}

class MyComSetState_ extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
        };
        setInterval(() => {
            this.setState({ count: ++this.state.count });
        }, 2000);
    }
    render() {
        return <Head1 count={this.state.count} />;
    }
}
export default MyComSetState_