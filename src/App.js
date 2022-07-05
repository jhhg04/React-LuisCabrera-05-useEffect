import React, { useState } from 'react';
// import FetchCard from './components/FetchCard';
// import Lifecycle from './components/Lifecycle';
import Resize from './components/Resize';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>useEffect</h1>
      {/* <Lifecycle /> */}
      {/* <FetchCard /> */}
      <button onClick={() => setShow(!show)}>Show/HIde</button>
      {show && <Resize />}
    </div>
  );
}

export default App;
