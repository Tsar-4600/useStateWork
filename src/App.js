
import './App.css';
import Zadanie2 from './components/timeCounter';
import Zadanie1 from './components/useEffectN1';
import UserProfile from './components/userShow';
import React, {useState, useEffect} from 'react'
function App() {
  const [inputValue, setInputValue] = useState('') // для поля ввода для задания 3
  const handleInputChange = (event) => {    // изменнеие значения при вводе в поле значенией
    setInputValue(event.target.value);
  };
  return (
    <div className="App">
      <Zadanie1/>
      <Zadanie2/>
      <div>
        <input
              type="number"
              value={inputValue}
              onChange={handleInputChange}
        />
      <UserProfile userId={inputValue}/>
      </div>
      
      
      
    </div>
  );
}

export default App;
