import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import './Details.css'

const Details = ({ bookList, drinkList, clearClicked, updateError }) => {
    const { id } = useParams()
    const bookDetails = bookList.find(book => book.title === id)
    

    return (
        <div className="details">
            <div className="book-details-wrapper">
                <h1>{bookDetails.title}</h1>
                <img style={{display: !bookDetails.bookImg &&  'none'}} src={bookDetails.bookImg} alt={"Book Cover of " + bookDetails.title } />
                <h2 style={{display: !bookDetails.author &&  'none'}}>{bookDetails.author}</h2>
                <p style={{display: !bookDetails.description &&  'none'}}>${bookDetails.description}</p>
                <p style={{display: !bookDetails.publisher &&  'none'}}>{bookDetails.publisher}</p>
                <a style={{display: !bookDetails.nytReviewLink &&  'none'}} href={bookDetails.nytReviewLink}>The New York Times Reviews</a>
                <a style={{display: !bookDetails.amazonProductUrl &&  'none'}} href={bookDetails.amazonProductUrl}>Buy on amazon!</a>
            </div> 
            <div className="drink-details-wrapper">
                
            </div>
        </div>
    )
}

export default Details