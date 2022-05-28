import React from 'react'

const Balloons = ({ color,num }) => {
    return (
        <div className='balloons' style={{ background: color }}>
            <span>{num}</span>
        </div>
    )
}

export default Balloons