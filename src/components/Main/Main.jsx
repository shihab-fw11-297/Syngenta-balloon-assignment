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
      arr.push([`#${Math.floor(Math.random() * 16777555).toString(16)}`, i])
    }
    setBalloons(arr)
  }

  useEffect(() => {
    balloonColor()
  }, [])


  //create function for handaling ballon 
  //for eg. if user click 1st balloon then remove from setadded state 
  //and add to balloon state list
  const handleBalloon = (e) => {
    let newData = added.filter((elem) => e[1] !== elem[1])
    setAdded([...newData])
    setBalloons([...balloons, e].sort((a, b) => a[1] - b[1]))
  }

  //take a number for ballon and push that ballooon in added list and remove from setballoons
  const HandleShoot = () => {
    // eslint-disable-next-line eqeqeq
    let valid = balloons.find((e) => e[1] == shootvalue)

    if (!valid) {
      alert("Balloon Alredy Added in Box")
      return
    }
    setShootvalue("")
    // eslint-disable-next-line eqeqeq
    const newArr = balloons.filter((e) => e[1] != shootvalue)

    setBalloons([...newArr])
    setAdded([...added, valid])

  }

  return (
    <div className="container">

      {/* creating box for adding balloon */}
      <div className="box">
        {added.map((el) => {
          return (
            <div className="boxBalloon" onClick={() => handleBalloon(el)}>
              <Balloons key={el[1]} color={el[0]} num={el[1]} />
            </div>
          )
        })}
      </div>


      {/* show 5 balloon list*/}
      <div className='balloons-containers'>
        {
          balloons.map((el) =>
            <Balloons key={el[1]} color={el[0]} num={el[1]} />
          )}
      </div>

      {/* show inputbox and trigger button*/}
      <div className="textArea">
        <select className="inputField" value={shootvalue} onChange={(e) => setShootvalue(e.target.value)}>
          <option defaultValue>Select Baloons</option>
          <option value="1">1 - First</option>
          <option value="2">2 - Second</option>
          <option value="3">3 - Third</option>
          <option value="4">4 - Fourth</option>
          <option value="5">5 - Fifth</option>
        </select>

        <button className='shootBtn' onClick={HandleShoot}>Shoot</button>
      </div>
    </div>
  )
};

