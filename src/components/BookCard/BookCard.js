import './BookCard.css'
import { useNavigate } from "react-router-dom"

const BookCard = ( 
    {
    id,
    bookImg,
    title 
    }
) => {
    const navigate = useNavigate()
    const handleClick = () => {
      navigate(`/details/${id}`)
    //   may need to make the title the id if the ids are the same with date.now
    }
    return (
        <button onClick={handleClick} className="book-card">
            <img style={{display: !bookImg &&  'none'}} src={bookImg} alt={"Book Cover of " + title } />
        </button>
    )
}

export default BookCard