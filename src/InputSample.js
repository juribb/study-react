import React,{useState} from 'react';

function InputSample(){ // input상태관리
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onReset = () => {
        setText('');
    }

    return (
        <div>
            {/* input 상태를 관리할 땐 value값을 설정*/}
            <input onChange={onChange} value={text}/> 
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {text}</b>
            </div>
        </div>
    )
}

export default InputSample;