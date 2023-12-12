import { useState } from 'react';
import './App.css';


function App() {
  let t = new Date().toLocaleTimeString();
  const [ctime, settime] = useState(t);

  const UpdateTime = () => {
    t = new Date().toLocaleTimeString();
    settime(t);

  };
  setInterval(UpdateTime, 1000)
  return (
    <>
      <div><h1 >{t}</h1></div>

    </>
  );
}

export default App;
