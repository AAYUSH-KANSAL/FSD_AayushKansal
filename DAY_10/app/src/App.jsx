import { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='count-app'>
      <div className='count-display'>
        <h1 className='count-display__heading'>{count}</h1>
      </div>
      <div className='count-controls'>
        <button className='count-btn' onClick={() => setCount(count + 1)}>Increment</button>
        <button className='count-btn' onClick={() => setCount(count - 1)}>Decrement</button>
        <button className='count-btn reset-btn' onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default App;
