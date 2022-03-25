import React from 'react';

const InnerProps = ({name,children}) => {
    return (
        <div>
             my name is {name} <br/>
            children name is {children}
        </div>
    );
};

InnerProps.defaultProps = {
    name : 'default'    
}

InnerProps.propTypes = {
    name : PropTypes.string
};

export default InnerProps;