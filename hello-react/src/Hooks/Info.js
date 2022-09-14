import React, { useEffect, useState } from 'react'

 const Info = () => {
    const [name,setName] = useState ("");
    const [nicName , setNicName] = useState ("");

    const onChangeName  = e  => {
        setName(e.target.value);
    };

    const onChangeNicName = e => {
        setNicName(e.target.value);
    };

    useEffect(() => {  //마운트가 실행될 때만 호출 
        console.log("It will be start when Mount");
    },[]);
    
    useEffect(()=> { // 특정값이 업데이트 될 때만 호출
        console.log(name )
    },[name]);

    useEffect(()=>{
        console.log("effect");
        console.log(name);
        return () => {
            console.log("clean up");
            console.log(name);
        }
    },[name]);

  return (
    <div>
        <div>
            <input value={name} onChange = {onChangeName }/>
            <input value={nicName} onChange = {onChangeNicName }/>
        </div>
        <div>
            <b>이름 : </b><span>{name}</span>
        </div>
        <div>
            <b>닉네임 : </b><span>{nicName}</span>
        </div>
    </div>
  )
}

export default Info;
