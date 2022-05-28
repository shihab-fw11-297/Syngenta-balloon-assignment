import './Main.style.css'
import { useEffect, useState } from 'react';
import Balloons from './Ballon';

export const Main = () => {
  const [balloons, setBalloons] = useState([])
  const [shootvalue, setShootvalue] = useState("");
  const [added, setAdded] = useState([])

  const balloonColor = () => {
    let arr = []
    for (let i = 1; i <= 5; i++) {
      arr.push([`#${Math.floor(Math.random() * 78605).toString(17)}`, i])
    }
    setBalloons(arr)
  }

  useEffect(() => {
    balloonColor()
  }, [])


  const HandleShoot = () => {
    let balloon = balloons.find((el)=>el[1]==shootvalue)
    if(!balloon){
     alert("enter a valid number")
      return
    }
    const newArr = balloons.filter((el)=>el[1]!=shootvalue)
    setBalloons([...newArr])
    setAdded([...added, balloon])
  }

  return (
    <div className="container">

      <div className="box">
      {added.map((el)=>{
        return(
          <div>
             <Balloons color={el[0]} />
          </div>
        )
      })}
      </div>

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
        <button className='shootBtn' onClick={HandleShoot}>Shoot</button>
      </div>
    </div>
  )
};

