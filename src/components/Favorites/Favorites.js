import './Favorites.css'
import FavBookCard from '../FavBookCard/FavBookCard'


const Favorites = ({ pairingList, toggleSavePairing }) => {
    const favPairingsList = pairingList.reduce((acc, pairing) => {
        if(pairing.isSaved) {
            acc.push(
                <FavBookCard
                key={pairing.book.title}
                title={pairing.book.title}
                image={pairing.book.bookImg}
                drink={pairing.drink.name}
                toggleSavePairing={toggleSavePairing}
                />
            )
        }
        return acc
    }, [])

    return (
        <div className='favorites'>
            <h1 className='favorites-page-title'>The Favorites List</h1>
            {favPairingsList.length === 0 && <h1 className="no-fav-message">You currently have no favorite games. Go and favorite some cool games!</h1>}
            <div className='favorites-card-wrapper'>{favPairingsList}</div>
        </div>
    )
}

export default Favorites