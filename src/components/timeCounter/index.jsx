import React, {useState, useEffect} from 'react';

import './styles.css';

function Zadanie2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (   
    <div>
        <h2>Zadanie2</h2>
        <p>Счетчик: {count}</p>
    </div>
    );
}

export default Zadanie2;