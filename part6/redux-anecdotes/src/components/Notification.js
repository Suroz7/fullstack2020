import { useSelector } from 'react-redux'
import React from 'react'

const Notification = () => {
  const notice = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notice}
    </div>
  )
}

export default Notification