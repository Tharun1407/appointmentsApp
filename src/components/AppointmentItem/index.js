// Write your code here
import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {details, changeStarredStatus} = props
  const {date, title, isStarred, id} = details

  const stared = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const handleStar = () => {
    changeStarredStatus(id)
  }

  return (
    <li>
      <div key={id} className="appointment-bg">
        <p>{title}</p>
        <p>Date:{format(new Date(date), 'dd MMMM yyyy, EEEE')}</p>
        <button data-testid="star" type="button" onClick={handleStar}>
          <img src={stared} alt="star" />
        </button>
      </div>
    </li>
  )
}

export default AppointmentItem
