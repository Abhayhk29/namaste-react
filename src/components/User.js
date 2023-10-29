import React, { useState } from 'react'

const User = ({name}) => {
    const [count, setCount] = useState(3);
  return (
    <div className='user-card'>
        {count}
        <h2>Name: {name}</h2>
        <h2>Location: Pune</h2>
        <h2>Company: Persistent</h2>
    </div>
  )
}

export default User