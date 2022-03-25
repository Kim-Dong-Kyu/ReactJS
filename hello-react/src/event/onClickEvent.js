import React from 'react';

const onClickEvent = () => {
    return (
        <div>
            <button onClick={()=>{
                alert("onclick function!") ;  
            }}>onclick Event!</button>
        </div>
    );
};

export default onClickEvent;