import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getDrinkDetails } from "../../apiCalls/GETRequests"
import './Details.css'

const Details = ({ pairingList, clearClicked, updateError }) => {
    const { id } = useParams()
    const foundPairing = pairingList.find(pairing => pairing.book.title === id)

    useEffect(() => {
        const createDrinkDetails = async () => {
            try {
                const drinkDetailsData = await getDrinkDetails()
            } catch(error) {
                console.error(error)
                setError(true)
                setIsLoading(false)
            }
        }

    }, [])

    return (
        <div className="details">
            {/* <div className="book-details-wrapper">
                <h1>{bookDetails.title}</h1>
                <img style={{display: !bookDetails.bookImg &&  'none'}} src={bookDetails.bookImg} alt={"Book Cover of " + bookDetails.title } />
                <h2 style={{display: !bookDetails.author &&  'none'}}>{bookDetails.author}</h2>
                <p style={{display: !bookDetails.description &&  'none'}}>${bookDetails.description}</p>
                <p style={{display: !bookDetails.publisher &&  'none'}}>{bookDetails.publisher}</p>
                <a style={{display: !bookDetails.nytReviewLink &&  'none'}} href={bookDetails.nytReviewLink}>The New York Times Reviews</a>
                <a style={{display: !bookDetails.amazonProductUrl &&  'none'}} href={bookDetails.amazonProductUrl}>Buy on amazon!</a>
            </div>  */}
            {/* <div className="drink-details-wrapper">
                <h1 className="drink-title">{randomDrink.name}</h1>
                <img src={randomDrink.img} alt={"Picture of " + randomDrink.name}/>
                <p>{randomDrink.glass}</p>
                <p>Instructions: {randomDrink.instructions}</p>
                <p>Ingredients:</p>
                <ol>
                    <li>{`${randomDrink.ingredient1} ${randomDrink.measure1}`}</li>
                    <li>{`${randomDrink.ingredient2} ${randomDrink.measure2}`}</li>
                    <li>{`${randomDrink.ingredient3} ${randomDrink.measure3}`}</li>
                    <li>{`${randomDrink.ingredient4} ${randomDrink.measure4}`}</li>
                    <li>{`${randomDrink.ingredient5} ${randomDrink.measure5}`}</li>
                    <li>{`${randomDrink.ingredient6} ${randomDrink.measure6}`}</li>
                    <li>{`${randomDrink.ingredient7} ${randomDrink.measure7}`}</li>
                    <li>{`${randomDrink.ingredient8} ${randomDrink.measure8}`}</li>
                    <li>{`${randomDrink.ingredient9} ${randomDrink.measure9}`}</li>
                    <li>{`${randomDrink.ingredient10} ${randomDrink.measure10}`}</li>
                    <li>{`${randomDrink.ingredien11} ${randomDrink.measure11}`}</li>
                    <li>{`${randomDrink.ingredient12} ${randomDrink.measure12}`}</li>
                    <li>{`${randomDrink.ingredient13} ${randomDrink.measure13}`}</li>
                    <li>{`${randomDrink.ingredient14} ${randomDrink.measure14}`}</li>
                    <li>{`${randomDrink.ingredient15} ${randomDrink.measure15}`}</li>
                </ol>    
            </div> */}
        </div>
    )
}

export default Details