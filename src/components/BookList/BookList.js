import './BookList.css'
import BookCard from '../BookCard/BookCard'
import Error from '../Error/Error'

const BookList = ({ pairingList, isLoading, error }) => {
    const allPairings = pairingList.map(pairing => {
         return <BookCard drink={pairing.drink} key={pairing.book.title} book={pairing.book} />
     })
    return (
        <div className='full-page'>
            {isLoading && <div className="is-loading-wrapper">Loading...</div>}
            {!isLoading && <div className='booklist'>
            <h1 className='booklist-page-title'>The Book List</h1>
            {error && <Error />}
            <div className='bookcard-wrapper'>
            {allPairings}
            </div>
            </div>}
        </div>
    )
}

export default BookList