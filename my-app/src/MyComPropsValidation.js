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