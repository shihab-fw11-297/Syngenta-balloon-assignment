import './Main.style.css'
import { useEffect, useState } from 'react';
import Balloons from './Ballon';

export const Main = () => {
  //creating states for adding balloon in box or which ballon is added to box
  const [balloons, setBalloons] = useState([])
  const [shootvalue, setShootvalue] = useState("");
  const [added, setAdded] = useState([])

  //generate color and number for balloon
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


  //create function for handaling ballon 
  //for eg. if user click 1st balloon then remove from setadded state 
  //and add to balloon state list
  const handleBalloon = (e)=>{
    let newArr = added.filter((elem)=>e[1]!==elem[1])
    setAdded([...newArr])
    setBalloons([...balloons, e].sort((a,b)=>a[1]-b[1]))
  }

  //take a number for ballon and push that ballooon in added list and remove from setballoons
  const HandleShoot = () => {
    // eslint-disable-next-line eqeqeq
    let balloon = balloons.find((e)=>e[1]==shootvalue)
    if(!balloon){
     alert("enter a valid number")
      return
    }
    // eslint-disable-next-line eqeqeq
    const newArr = balloons.filter((e)=>e[1]!=shootvalue)
    setBalloons([...newArr])
    setAdded([...added, balloon])
  }

  return (
    <div className="container">

      <div className="box">
      {added.map((el)=>{
        return(
          <div onClick={()=>handleBalloon(el)}>
             <Balloons color={el[0]} num={el[1]}/>
          </div>
        )
      })}
      </div>

      <div className='balloons-containers'>
        {
          balloons.map((el) =>
            <Balloons key={el[1]} color={el[0]} num={el[1]}/>
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

