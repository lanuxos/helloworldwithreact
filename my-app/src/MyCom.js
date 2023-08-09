import React from 'react'
import gopher from "./gopher.png"
import "./App.css"
class MyCom extends React.Component {
    render() {
        return <header className = "App-header">[Class based component]<img src = {gopher} className = 'App-logo' /> </header>;
    }
}

export default MyCom