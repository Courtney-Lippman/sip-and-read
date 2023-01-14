import './FavBookCard.css'
import { useNavigate } from "react-router-dom"

const FavBookCard = ({ title, image, drink, isSaved }) => {
    const navigate = useNavigate()
    const handleClick = () => {
      navigate(`/details/${title}`)
    }
    return (
        <div className='fav-book-card'>
            <button onClick={handleClick} className="fav-book-card">
                <img style={{display: !image &&  'none'}} src={image} alt={"Book Cover of " + title } />
                <p className='fav-drink-name'>{drink}</p>
            </button>
        </div>
    )
}

export default FavBookCard