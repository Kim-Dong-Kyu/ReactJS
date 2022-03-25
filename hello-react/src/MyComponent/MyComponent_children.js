import React from 'react';

const MyComponent_children = props => {
    return (
        <div>
            my name is {props.name} <br/>
            children name is {props.children}

        </div>
    );
};

MyComponent_children.defaultProps ={
    name  :"defalt"
};

export default MyComponent_children;