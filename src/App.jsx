import { useState } from 'react'
import MarsWorksLogo from '/home/student/Marsworks/src/deimos-arm-GUI/src/assets/MarsWorksLogo.png'
import './App.css'
import Camera from './camera'
import Terminal from './terminal'

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
            <section id="section">
              <h2>Home Position</h2>
              <button
              className="setHome"
              onClick={() => console.log("Setting current pos as home")} // TODO: set home pos as current pos
              >
                Set current position as Home
              </button>
              <button
                className="goToHome"
                onClick={() => console.log("Going to home pos")} // TODO: go to home pos
              >
                Go to Home position
              </button>
            </section>
          </div>
          <div id="move">
            <section id="section">
              <h2>Stuff to move arm here</h2>
            </section>
          </div>

        </section>
        
        <section id="right">
          <div id="camera">
            <section id="section">
              <h2>Camera</h2>
              <Camera />
            </section>
          </div>
          <div id="terminal">
            <section id="section">
              <h2>Terminal</h2>
              <Terminal />
            </section>
          </div>
        </section>
      </section>

      {/* <div className="ticks"></div> */}
      <section id="spacer"></section>
    </>
  )
}

export default App
