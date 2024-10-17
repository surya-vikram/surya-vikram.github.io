import { useState } from 'react';
import About from './About.jsx';
import Navbar from './Navbar.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>

        <Navbar></Navbar>

        <section className="my-name-section min-h-[90vh]  flex flex-col justify-center items-center">
          <div className="name-container p-5 text-[--color-1]">
            <div><span className="text-3xl">Hi! My name is</span></div>
            <div><h1 className='text-7xl sm:text-9xl'>Rashmi Tindwani</h1></div>
          </div>
        </section>

      </header>

      <main>
            <About></About>
      </main>
    </>
  )
}

export default App
