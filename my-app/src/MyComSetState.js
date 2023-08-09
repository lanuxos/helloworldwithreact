import React from 'react'

class MyComSetState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
        };
        setInterval(() => {
            this.setState({ count: ++this.state.count });
        }, 1000);
    }
    render() {
        return <p>Count {this.state.count} [change every 1000 ms or 1 second]</p>;
    }
}
export default MyComSetState