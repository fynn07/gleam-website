import { useState } from 'react';
import Landing from './components/Landing';
import NavBar from './components/NavBar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative">
      <div
        className="fixed top-0 left-0 w-screen h-screen z-0"
        style={{
          backgroundImage: 'url(src/assets/gleam_background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1
        }}
      />
      <div className='px-40 py-5 relative z-10'>
        <NavBar />
        <Landing />
      </div>
    </div>
  );
}

export default App;
