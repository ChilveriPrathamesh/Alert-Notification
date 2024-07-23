// Write your code here

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => {
  const renderSuccessNotification = () => (
    <Notification>
      <div className="container">
        <AiFillCheckCircle className="icon success" />
        <div className="message-container">
          <h1 className="alert-title success">Success</h1>
          <p className="alert-description">
            You can access all the files in the folder
          </p>
        </div>
      </div>
    </Notification>
  )

  const renderErrorNotification = () => (
    <Notification>
      <div className="container">
        <RiErrorWarningFill className="icon error" />
        <div className="message-container">
          <h1 className="alert-title error">Error</h1>
          <p className="alert-description">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </div>
    </Notification>
  )

  const renderWarningNotification = () => (
    <Notification>
      <div className="container">
        <MdWarning className="icon warning" />
        <div className="message-container">
          <h1 className="alert-title warning">Warning</h1>
          <p className="alert-description">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </div>
    </Notification>
  )

  const renderInfoNotification = () => (
    <Notification>
      <div className="container">
        <MdInfo className="icon info" />
        <div className="message-container">
          <h1 className="alert-title info">Info</h1>
          <p className="alert-description">
            Anyone on the internet can view these files
          </p>
        </div>
      </div>
    </Notification>
  )

  return (
    <>
      <div className="alert-notification-container">
        <div className="notification-container">
          <h1>Alert Notifications</h1>
          {renderSuccessNotification()}
          {renderErrorNotification()}
          {renderWarningNotification()}
          {renderInfoNotification()}
        </div>
      </div>
    </>
  )
}
export default AlertNotifications
