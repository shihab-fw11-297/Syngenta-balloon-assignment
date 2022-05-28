import './Main.style.css'
import { useEffect, useState } from 'react';
import Balloons from './Ballon';

export const Main = () => {
  const [balloons, setBalloons] = useState([])
  const [shootvalue, setShootvalue] = useState("");


  const balloonColor = () => {
    let arr = []
    for (let i = 1; i <= 5; i++) {
      arr.push([`#${Math.floor(Math.random() * 500).toString(17)}`, i])
    }
    setBalloons(arr)
  }

  useEffect(() => {
    balloonColor()
  }, [])


  return (
    <div className="container">
      <div className="box"></div>
      <div className='balloons-containers'>
        {
          balloons.map((el) =>
            <Balloons color={el[0]} />
          )}
      </div>

      <div className="textArea">
      <input
          type="number"
          label="enter a number"
          onChange={(e) => setShootvalue(e.target.value)}
          className="inputField"
        />
        <br />
        <button>Shoot</button>
      </div>
    </div>
  )
};

