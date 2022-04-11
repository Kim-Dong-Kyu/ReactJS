/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Refsample extends Component {

    state = {
        password :'', 
        id : '',
        clicked : false, 
        validated: false
    }

    handleChange_id  = (e) => {
        this.setState({
            id  : e.target.value,
        })
    }

    handleChange_pw  = (e) => {
        this.setState({
            password : e.target.value
        })
    }


    handlebuttonClick = () => {
        this.setState({
            clicked: true, 
            validated_id : this.state.id === 'abc',
            validated_pw : this.state.password === '0000'
        })
    }
    handleFocus = () => {
        this.input.current.focus();
    }
    render() {
        return (
            <div>
                <span>id:</span>
                <input type="text" value = {this.state.id} onChange = {this.handleChange_id} className = {this.state.clicked ? (this.state.validated_id ? 'success' : 'failure') : ''}/><br/>
                <span>password:</span>
                <input type="password" value= {this.state.password} onChange = {this.handleChange_pw} className = {this.state.clicked ? (this.state.validated_pw ? 'success' : 'failure') : ''}/>
                <button onClick={this.handlebuttonClick}>로그인</button> 
            </div>
        );
    }
}
export default Refsample;