import React, {useState} from 'react';


function TextInput(){
    const[text, setText] = useState('');



    return(
        <>
            <input type = "text" value= {text}
             onChange ={(e)=> setText(e.target.value)} >

            </input>
        
            <p>Вы ввели: {text}</p>
        </>
    
    );
}


export default TextInput;
