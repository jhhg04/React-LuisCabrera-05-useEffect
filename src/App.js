import React, { useState } from 'react';
import Lifecycle from './components/Lifecycle';
// import FetchCard from './components/FetchCard';
// import Resize from './components/Resize';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>useEffect</h1>
      <button onClick={() => setShow(!show)}>Show/HIde</button>
      {show && <Lifecycle />}
      {/* <FetchCard /> */}
      {/* {show && <Resize />} */}
    </div>
  );
}

export default App;
