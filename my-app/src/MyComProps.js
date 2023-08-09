import React from 'react'

class Head1 extends React.Component {
    render() {
        return <h1>[props]Name: {this.props.name}</h1>;
    }
}

class Head2 extends React.Component {
    render() {
        return <h2>[props]Age: {this.props.age}</h2>;
    }
}

class MyComProps extends React.Component {
    render() {
        return <div>
            <Head1 name='anonymous'/>
            <Head2 age={ 99 } />
        </div>;
    }
}

export default MyComProps