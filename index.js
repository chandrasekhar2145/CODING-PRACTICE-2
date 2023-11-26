const Notification = props => {
  //  Write your code here.
  return (
    <li className={`${props.className}`}>
      <img src={`${props.image}`} alt='image' />
      <p>{`${props.text}`}</p>
    </li>
  )
}

const element = (
  //  Write your code here.
  <div>
    <h1 className='heading'>Notifications</h1>
    <ul>
      <Notification
        className='information'
        image='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
        text='Information Message'
      />
      <Notification
        className='success'
        image='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
        text='Success Message'
      />
      <Notification
        className='warning'
        image='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
        text='Warning Message'
      />
      <Notification
        className='error'
        image='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
        text='Error Message'
      />
    </ul>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
