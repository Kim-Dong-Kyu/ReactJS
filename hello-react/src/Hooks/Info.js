import React, { useState } from 'react'

 const Info = () => {
    const [name,setName] = useState ("");
    const [nicName , setNicName] = useState ("");

    const onChangeName  = e  => {
        setName(e.target.value);
    };

    const onChangeNicName = e => {
        setNicName(e.target.value);
    };
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
