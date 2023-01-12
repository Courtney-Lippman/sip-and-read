import './BookCard.css'
import { useNavigate } from "react-router-dom"

const BookCard = ( 
    {
    bookImg,
    title 
    }
) => {
    const navigate = useNavigate()
    const handleClick = () => {
      navigate(`/details/${title}`)
    }
    return (
        <button onClick={handleClick} className="book-card">
            <img style={{display: !bookImg &&  'none'}} src={bookImg} alt={"Book Cover of " + title } />
        </button>
    )
}

export default BookCard