import React, {Component} from 'react';
import './index.css';

class CalcInput extends Component{

    render(){
        return (
            <div className = "calcInput">
                {this.props.children}
            </div>
        );
    }
}

export default CalcInput;
