import React, { useState } from 'react'
import Keyboard from './Keyboard'
import ChangeBank from './ChangeBank'
import { soundDataOne, soundDataTwo } from './data'

const App = () => {
  const [power, setPower] = useState(true);
  const [sounds, setSounds] = useState(soundDataOne);
  const [bank, setBank] = useState("Bank 1");
  const [active, setActive] = useState(null);
  const [volume, setVolume] = useState(0.5);

  const playSound = (key) => {
    if (power) {
      const audio = document.getElementById(key)

      setActive(key);
      setTimeout(() => setActive(null), 200)

      audio.volume = volume;
      audio.currentTime = 0
      audio.play()
    }
  }

  const handleVolume = e => {
    setVolume(parseFloat(e.target.value));
  }

  const handlePower = () => {
    setPower(prev => !prev);
  }

  const change = () => {
    setSounds(sounds === soundDataOne ? soundDataTwo : soundDataOne);
    setBank(bank === "Bank 1" ? "Bank 2" : "Bank 1");
  }


  return (
    <div id="drum-machine" className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <button onClick={handlePower} className={`btn ${power ? "btn-info" : "btn-secondary"} mb-5`}>Power {power ? "On" : "Off"}</button>
      <Keyboard power={power} active={active} play={playSound} sounds={sounds} volume={volume} />
      <ChangeBank change={change} bank={bank} />

      <label htmlFor="volume" className="form-label text-light mt-4">Volume</label>
      <input className="form-range" type="range" name="volume" id="volume" min={0} max={1} step={0.01} value={volume} onChange={handleVolume} />
    </div>
  )
}

export default App