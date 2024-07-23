import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props

  return (
    <div className="notification-content">
      <div className="notification">{children}</div>
      <GrFormClose className="close-icon" />
    </div>
  )
}

export default Notification
