import React, {useState} from 'react';
import './styles.css'
function LightSwitcher() {
    const [isOn, setIsOn] = useState(false);

    return ( 
        <div className = {isOn ? 'lighttheme' : 'darktheme'} >
            <p>Свет {isOn ? 'включен' : 'выключен'}</p>
            <button onClick={() => setIsOn(!isOn)} >
                {isOn ? 'Выключить' : 'Включить'}

            </button>

    
        </div>
    );

}

export default LightSwitcher;