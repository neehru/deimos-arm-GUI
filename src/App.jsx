import { useState } from 'react'
import MarsWorksLogo from '/home/student/Marsworks/src/deimos-arm-GUI/src/assets/MarsWorksLogo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="title">
        <h3>Deimos Arm Control</h3>
        <img src={MarsWorksLogo} className="MarsWorksLogo" alt="Project MarsWorks logo"></img>
      </section>

      <section id="main">
      
        <section id="left">
          <div id="home">
            <button
              className="setHome"
              onClick={() => setCount((count) => count + 1)} // TODO: set home pos as current pos
            >
              Set current position as Home
            </button>
            <button
              className="goToHome"
              onClick={() => setCount((count) => count + 1)} // TODO: go to home pos
            >
              Go to Home position
            </button>
          </div>
          <div id="move">
            <h2>Stuff to move arm here</h2>
          </div>

        </section>
        
        <section id="right">
          <div id="camera">
            <h2>Camera</h2>
          </div>
          <div id="terminal">
            <h2>cmd</h2>
          </div>
        </section>
      </section>

      {/* <div className="ticks"></div> */}
      <section id="spacer"></section>
    </>
  )
}

export default App
