import { useState } from 'react'
import './App.css'

function App() {
  const [encounterNumber, setEncounterNumber] = useState(59)

  const rollNumber = () => {
    setEncounterNumber(Math.floor(Math.random() * 180) + 1)
  }

  const encounterText = (): string => {
    if(encounterNumber === 0) return '';
    const box = calcEncounterBox();
    const row = calcEncounterRow();
    const col = calcEncounterCol();
    return 'Mon is in Box ' + box + ', Row: ' + row + ' Col: ' + col;
  }

  const calcEncounterBox = (): number => {
    return encounterNumber%30== 0? encounterNumber/30 : Math.floor(encounterNumber / 30) + 1;
  }

  const calcEncounterRow = (): number => {
    if(encounterNumber %30 == 0 ) return 5;
    return encounterNumber%6 == 0 ? (encounterNumber%30)/6 :Math.floor((encounterNumber % 30) / 6) + 1;
  }

  const calcEncounterCol = (): number => {
    return encounterNumber%6 == 0 ? 6: (encounterNumber % 30) % 6;
  }

  return (
    <>
      <h1>Squerk Egglocke brain relaxer</h1>
      <button className='button' onClick={rollNumber}>Roll for Egg</button>
      <p className='text'>{encounterNumber != 0 ? `Roll: ${encounterNumber}`: ''}</p>
      <p className='text'>{encounterText()}</p>
    </>
  )
}

export default App
