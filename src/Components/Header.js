import React from 'react'

const Header = ({data,del,len}) => {
  return (
    <div className='text-gray-400 flex justify-between pt-2 m-5'>
      <div>{len} Tasks Left</div>
      <div><button onClick={del}>Clear All Tasks</button></div>

    </div>
  )
}

export default Header
