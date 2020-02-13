import React from 'react'
import useToggle from '../hooks/useToggle'

const ChatWidget: React.FC = () => {
  const [toggle, setToggle] = useToggle(false)

  const handleToggle = () => setToggle()

  console.log('toggle', toggle)
  return (
    <>
      {toggle && <h1>Hello from chat widget</h1>}
      <button onClick={handleToggle}>toggle</button>
    </>
  )
}

export default ChatWidget
