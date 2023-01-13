import './BookList.css'
import BookCard from '../BookCard/BookCard'

const BookList = ({ pairingList, isLoading }) => {
    const allPairings = pairingList.map(pairing => {
         return <BookCard drink={pairing.drink} key={pairing.book.title} book={pairing.book} />
     })
    return (
        <div className='booklist'>
            <h1 className='booklist-page-title'>The Book List</h1>
            <div className='bookcard-wrapper'>
            {allPairings}
            </div>
        </div>
    )
}

export default BookList