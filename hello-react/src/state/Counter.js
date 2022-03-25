import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    state = {
        number : 0
    }
    render() {
        const{number} = this.state; //state 값 조회는 this.state로 
        return (
            <div>
                <h1>{number}</h1>
                <button onClick={()=> {
                    this.setState(
                        {
                            number : number +1 
                        }, 
                        () => {
                            console.log("setState callback!")
                            console.log(this.state);
                        }
                    )
                }}>
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;