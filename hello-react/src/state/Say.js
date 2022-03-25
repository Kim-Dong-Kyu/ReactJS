import React, {useState} from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage("hello React");
    const onclickLeave =() => setMessage("Good bye React");

    return (
        <div>
            <button onClick={onClickEnter}>Hello</button>
            <button onClick={onclickLeave}>Good Bye</button>
            <h1>{message}</h1>
        </div>
    );
};

export default Say;