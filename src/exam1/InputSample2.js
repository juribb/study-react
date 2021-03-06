import React, {useState, useRef} from 'react';

function InputSample2(){ // 여러개의 input상태 관리 , useRef로 특정 DOM선택
    const [inputs, setInputs] = useState({
        name : '',
        nickname : ''
    });

    const nameInput = useRef();
    const {name, nickname} = inputs;

    const onChange = (e) => {
        const {value, name} = e.target; // target에서 name, value 추출
        setInputs({
            ...inputs,
            [name] : value
        });
    };

    const onReset = () => {
        setInputs({
            name:'',
            nickname:''
        });
        nameInput.current.focus();
    };

    return(
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value ={name} ref={nameInput}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value ={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );

}

export default InputSample2;