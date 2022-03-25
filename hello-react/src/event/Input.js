import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    state ={
        message : ''
    }
    render() {
        return (
            <div>
                <h1>input Test</h1>
                <input 
                    type ="text"
                    name = "message"
                    placeholder='--'
                    value = {this.state.message}
                    onChange = {
                        (e) => {
                            this.setState({
                                message : e.target.value
                            })
                        }
                    }
                />    
            </div>
        );
    }
}

Input.propTypes = {

};

export default Input;