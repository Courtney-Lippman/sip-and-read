import './BookCard.css'
import { useNavigate } from "react-router-dom"
import PropTypes from 'prop-types'

const BookCard = ({ drink, book }) => {
    const navigate = useNavigate()
    const handleClick = () => {
      navigate(`/details/${book.title}  ${drink.id}`)
    }
    return (
        <button onClick={handleClick} className="book-card">
            <img style={{display: !book.bookImg &&  'none'}} src={book.bookImg} alt={"Book Cover of " + book.title } />
            <p className='drink-name'>{drink.name}</p>
        </button>
    )
}

export default BookCard

BookCard.propTypes = {
    drink: PropTypes.objectOf(PropTypes.string),
    book: PropTypes.object,
}

