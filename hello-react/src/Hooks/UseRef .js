import React, { useCallback, useMemo } from 'react';

const getAverae = numbers => {
    console.log ('평균값 계산 중 ...');

    if(numbers.length === 0) return 0;

    const sum = numbers.reduce((a,b) => a +b);
    return sum /numbers.length;
}

const UseRef  = () => {

    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEL = useRef(null);

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    },[]);

    const onInsert = useCallback(e => {
        const nextList  = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    },[number, list]);

    const avg = useMemo(() => getAverae(list),[list]);
    return (
        <div>
         <input value={number} onChange = {onChange} ref={inputEl}></input>
         <button onClick={onInsert}></button> 
        <ul>
           {list.map((value, index) => (
             <li key={index}>{value}</li>
           ))} 
        </ul>
        <div>
            <b>평균값 : </b> {avg}
        </div>
        </div>
    );
};

export default UseRef ;