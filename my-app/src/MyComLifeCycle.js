import react from 'react'

class MyComLifeCycle extends react.Component {
    componentWillMount() {
        console.log('Component will mount');
    }
    componentDidMount() {
        console.log('Component did mount');
    }
    componentWillUnmount() {
        console.log('Component will unmount');
    }
    render() {
        return <p>React Component Life Cycle</p>
    }
}
export default MyComLifeCycle