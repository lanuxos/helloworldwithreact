# helloworldwithreact
# สวัสดีชาวโลกด้วย React

# Introduction
- Babel
- ReactDOM.render(element, container[, callback]);
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello React</title>
    <script src="./react.min.js"></script>
    <script src="./react-dom.min.js"></script>
    <script src="./babel.min.js"></script>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel">
        let lib = {
            name: 'React',
            version: '18.2.0'
        };
        const element = <h1>Hello, world. This is {lib.name} library, version {lib.version}. </h1>;
        ReactDOM.render(element, document.getElementById("root"));
    </script>
</body>
</html>
```
- environment
```
npx create-react-app my-app
cd my-app
npm start
```
- component
```
import logo from './logo.svg';
import './App.css';
import gopher from './gopher.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={gopher} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

```
- class component
```
import React from 'react'
import gopher from "./gopher.png"
import "./App.css"
class MyCom extends React.Component {
    render() {
        return <header className = "App-header"> <img src = {gopher} className = 'App-logo' /> </header>;
    }
}

export default MyCom
```
- render condition
```
import React from 'react'
import gopher from "./gopher.png"
import logo from './logo.svg'
import "./App.css"

const d = new Date().getDate();

function HeadOdd() {
    return <h1>{ d } is Odd</h1>;
}

function HeadEven() {
    return <h1>{ d } is Even</h1>;
}

function MyCom() {
    if (d % 2 == 0) { return <HeadEven />; }
    else { return <HeadOdd />; }
}

export default MyCom
```
- child component
    - normal html child-tree
```
import React from 'react'
import gopher from "./gopher.png"
import logo from './logo.svg'
import "./App.css"

const d = new Date().getDate();

function HeadOdd() {
    return <h1>{ d } is Odd</h1>;
}

function HeadEven() {
    return <h1>{ d } is Even</h1>;
}

function MyCom() {
    if (d % 2 == 0) {
        return <div>
            <HeadEven />
            <HeadOdd/>
        </div>;
    }
    else {
        return <center>
            <HeadOdd/>
            <HeadEven />
        </center>;
    }
}

export default MyCom
```
    - React.Fragment
```
import React from 'react'
import gopher from "./gopher.png"
import logo from './logo.svg'
import "./App.css"

const d = new Date().getDate();

function HeadOdd() {
    return <h1>{ d } is Odd</h1>;
}

function HeadEven() {
    return <h1>{ d } is Even</h1>;
}

function MyCom() {
    if (d % 2 == 0) {
        return <React.Fragment>
            <HeadEven />
            <HeadOdd/>
        </React.Fragment>;
    }
    else {
        return <React.Fragment>
            <HeadOdd/>
            <HeadEven />
        </React.Fragment>;
    }
}

export default MyCom
```
- props [properties which is read-only, immutable]
```
import React from 'react'

class Head1 extends React.Component {
    render() {
        return <h1>Name: {this.props.name}</h1>;
    }
}

class Head2 extends React.Component {
    render() {
        return <h2>Age: {this.props.age}</h2>;
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
```
```
import React from 'react'

function Head1 (props) {
    return <h1>Name: {props.name}</h1>;
}

function Head2 (props) {
    return <h2>Age: {props.age}</h2>;
}

class MyComProps extends React.Component {
    render() {
        return <div>
            <Head1 name='anonymous'/>
            <Head2 age={ 90 } />
        </div>;
    }
}

export default MyComProps
```
- default props
```
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
```
- props validation
```
import React from 'react'
import PropTypes from 'prop-types'

class MyComPropsValidation extends React.Component {
    render() {
        return <div>
            <p>Number: {this.props.propNum}</p>
            <p>Bool: {this.props.propBool}</p>
            <p>String: {this.props.propStr}</p>
            <p>Array: {this.props.propArr}</p>
            <p>Object: {`x=${this.props.propObj.x}, y=${this.props.propObj.y}`}</p>
            <p>Function: {this.props.propFunc(5)}</p>
        </div>;
    }
}
MyComPropsValidation.propTypes = {
    propNum: PropTypes.number,
    propBool: PropTypes.bool.isRequired,
    propStr: PropTypes.string,
    propArr: PropTypes.array.isRequired,
    propObj: PropTypes.object,
    propFunc: PropTypes.func
}
MyComPropsValidation.defaultProps = {
    propNum: 123,
    propBool: true,
    propStr: "DefaultString",
    propArr: [3,2,1],
    propObj: {
        x: 4,
        y: 5
    },
    propFunc: function(x){return x**2},
}
export default MyComPropsValidation
```
- state [store data inside the class]
```
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
```
- state acquiring with map()
```
import React from 'react'

function Row(props) {
    return <li>{props.name}, {props.age} year(s) old [index: {props.index}].</li>;
}

class MyComStateMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [
                {name: 'first', age: 10},
                {name: 'second', age: 20},
                {name: 'third', age: 30},
                {name: 'forth', age: 40},
                {name: 'fifth', age: 50},
            ]
        };
    }
    render() {
        return <ol>
            {this.state.people.map((ele, index) => <Row name={ele.name} age={ele.age} index={index}/>)}
        </ol>;
    }
}
export default MyComStateMap
```
- component state manipulate [setState()]
```
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
```
```
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
```
- JSX element event [onClick, onChange]
```
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
```
```
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
```
- node finding
```
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
            <p ref='display'>Age 18 years old</p>
            <input type='range' min='1' max='100' onChange={this.change.bind(this)} />
        </div>;
    }
}
export default MyComNode
```
```
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
            <p id='display'>Age_ 1 years old</p>
            <input type='range' min='1' max='100' onChange={this.change.bind(this)} />
        </div>;
    }
}
export default MyComNode_
```
- react component lifecycle
    - Mounting [add nodes to DOM]
    - Updating [update nodes in DOM]
    - Unmounting [remove nodes from DOM]
    - Error handling [check if source code run w/o bugs]
```
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
```
```
import react from 'react';
import reactDom from 'react-dom';
import MyComLifeCycle from './MyComLifeCycle'
reactDom.render(<MyComLifeCycle/>, document.getElementById('root'));
setTimeout(()=>{
    reactDom.unmountComponentAtNode(document.getElementById('root'));
}, 10000);
```