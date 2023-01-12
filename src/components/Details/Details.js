import { useEffect, useState } from "react"
import './Details.css'

const Details = (
    {
        id,
        amazonProductUrl,
        author,
        bookImg,
        nytReviewLink,
        buyLinks,
        description,
        publisher,
        title 
        }
) => {

    return (
        <div className="details">
            <div className="details-wrapper">
                <h1>{title}</h1>
                <img style={{display: !bookImg &&  'none'}} src={bookImg} alt={"Book Cover of " + title } />
                <h2 style={{display: !author &&  'none'}}>{author}</h2>
                <p style={{display: !description &&  'none'}}>${description}</p>
                <p style={{display: !publisher &&  'none'}}>{publisher}</p>
                <a style={{display: !nytReviewLink &&  'none'}} href={nytReviewLink}>The New York Times Reviews</a>
                <a style={{display: !amazonProductUrl &&  'none'}} href={amazonProductUrl}>Buy on amazon!</a>
            </div> 
        </div>
    )
}

export default Details