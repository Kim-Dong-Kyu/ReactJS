import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OnClickEventClass extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <button onClick={()=> {
                    alert("onClick event!")
                }}>onClick event!</button>
            </div>
        );
    }
}

OnClickEventClass.propTypes = {

};

export default OnClickEventClass;