import React from 'react';

function Hello({name, color, isSpecial}){
    return (
        <div style={{color}}>
            { isSpecial && <b>*</b> }
            hello {name}
        </div>
    ) 
    
}

Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;