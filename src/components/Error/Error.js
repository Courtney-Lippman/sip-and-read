import './Error.css'
import { BiError } from 'react-icons/bi'
import PropTypes from 'prop-types'

const Error = ({ messageType }) => {
    let message1
    let message2
    if(messageType === 'drink') {
        message1 = 'Oops! Something went wrong with our drink information.'
        message2 = 'Pair this book with your favorite beer instead!'
    } else {
        message1= 'Oops! Something went wrong!'
        message2= 'Please try again later.'
    }
    return (
        <div className='error'>
        <BiError className='error-icon' />
        <h1 className='oops'>{message1}</h1>
        <p className='message'>{message2}</p>
        </div>
    )
}

export default Error

Error.propTypes = {
    messageType: PropTypes.string.isRequired
}