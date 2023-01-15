import './Favorites.css'
import FavBookCard from '../FavBookCard/FavBookCard'
import Error from '../Error/Error'


const Favorites = ({ pairingList, toggleSavePairing, error, setClicked }) => {
    setClicked('favorites')
    const favPairingsList = pairingList.reduce((acc, pairing) => {
        if(pairing.isSaved) {
            acc.push(
                <FavBookCard
                key={pairing.book.title}
                title={pairing.book.title}
                image={pairing.book.bookImg}
                drink={pairing.drink.name}
                drinkId={pairing.drink.id}
                toggleSavePairing={toggleSavePairing}
                />
            )
        }
        return acc
    }, [])

    return (
        <div className='favorites'>
            <h1 className='favorites-page-title'>The Favorites List</h1>
            {error && <Error />}
            {favPairingsList.length === 0 && <h1 className="no-fav-message">You currently have no favorite pairings.</h1>}
            <div className='favorites-card-wrapper'>{favPairingsList}</div>
        </div>
    )
}

export default Favorites