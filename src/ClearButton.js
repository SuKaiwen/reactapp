import React, {Component} from 'react';
import './index.css';

class ClearButton extends Component{

    render(){
        return (
            //Check if the button is an operator (not a number!) if so style it differently
            <div className = "clearButton" onClick={() => this.props.handleClear()}>
                {this.props.children}
            </div>
        );
    }
}

export default ClearButton;
