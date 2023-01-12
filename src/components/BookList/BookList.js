import './BookList.css'
import BookCard from '../BookCard/BookCard'

const BookList = ({ bookList, isLoading }) => {
    const allBooks = bookList.map(book => {
        return <BookCard key={book.title} {...book} />
    })
    return (
        <div className='booklist'>
            <h1 className='booklist-page-title'>The Book List</h1>
            <div className='bookcard-wrapper'>
            {allBooks}
            </div>
        </div>
    )
}

export default BookList