import './FavBookCard.css'
import { BsTrash } from 'react-icons/bs'
import { useNavigate } from "react-router-dom"

const FavBookCard = ({ title, image, drink, toggleSavePairing, drinkId }) => {
    const navigate = useNavigate()
    const handleClick = () => {
      navigate(`/details/${title}  ${drinkId}`)
    }
    return (
        <div className='fav-book-card'>
            <button onClick={handleClick} className="fav-book-card">
                <img style={{display: !image &&  'none'}} src={image} alt={"Book Cover of " + title } />
                <p className='fav-drink-name'>{drink}</p>
            </button>
            <BsTrash className="trash" onClick={() => {toggleSavePairing(title)}} />
        </div>
    )
}

export default FavBookCard