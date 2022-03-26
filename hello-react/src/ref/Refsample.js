/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Refsample extends Component {
    constructor(props) {
        super(props);
    }

    input = React.createRef();

    handleFocus = () => {
        this.input.current.focus();
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

Refsample.propTypes = {

};

export default Refsample;