import React, { useEffect, useState } from 'react'

const Keyboard = ({ active, play, sounds, power, volume }) => {
    const [soundName, setSoundName] = useState(null)
    return <div id="display">
        {soundName && <div className="text-light text-center fw-bold mb-3">{soundName}</div>}
        {sounds.map(sound => <KeyboardKey key={sound.id} sound={sound} play={play} active={active} power={power} volume={volume} setSoundName={setSoundName} />)}
    </div>
}

const KeyboardKey = ({ active, sound, play, power, volume, setSoundName }) => {
    const handleKeyDown = (e) => {
        if (e.keyCode === sound.keyCode) {
            setSoundName(sound.id)
            play(sound.keyTrigger)
        }
    }

    useEffect(() => {
        if (power) {
            document.addEventListener('keydown', handleKeyDown)
        }
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [power, volume])

    return (
        <button id={sound.id} onClick={() => {
            play(sound.keyTrigger);
            setSoundName(sound.id);
            }} className={`btn btn-danger mx-2 drum-pad ${active === sound.keyTrigger && 'active'}`}>
            <audio className="clip" id={sound.keyTrigger} src={sound.url} />
            {sound.keyTrigger}
        </button>
    )
}



export default Keyboard