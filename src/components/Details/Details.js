import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getDrinkDetails } from "../../apiCalls/GETRequests"
import { cleanRandomDrinkData } from "../../utilities/utilities"
import { BsSuitHeartFill } from 'react-icons/bs'
import Error from '../Error/Error'
import './Details.css'

const Details = ({ pairingList, clearClicked, toggleSavePairing }) => {
    const [drinkDetails, setDrinkDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [drinkError, setDrinkError] = useState(false)
    const { id } = useParams()
    const foundPairing = pairingList.find(pairing => pairing.book.title === id)
    const drinkId = foundPairing.drink.id
    const bookDetails = foundPairing.book

    useEffect(() => {
        clearClicked()
        const createDrinkDetails = async (id) => {
            try {
                const drinkDetailsData = await getDrinkDetails(id)
                const cleanDrinkDetails = cleanRandomDrinkData(drinkDetailsData)
                setDrinkDetails(cleanDrinkDetails)
                setDrinkError(false)
                setIsLoading(false)
            } catch(error) {
                console.error(error)
                setDrinkError(true)
                setIsLoading(false)
            }
        }
        createDrinkDetails(drinkId)
    }, [])

    const renderCheck = (detail) => {
        if(!detail) {
            return {display: 'none' }
        }

    }

    return (
        <div className="full-page">
            {isLoading && <div className="is-loading-wrapper">Loading...</div>}
            {!isLoading && <div className="details-page">
                <div className="save-button-wrapper">
                <button style={renderCheck(!foundPairing.isSaved)} className="save-button" onClick={() => {toggleSavePairing(bookDetails.title)}}>Save Pairing to favorites <BsSuitHeartFill /></button>
                <p className="saved-message" style={renderCheck(foundPairing.isSaved)}>This pairing has been saved.</p>
                </div>
                <h1 className="details-page-title">The Pairing</h1>
                <div className="details">
                    <div className="book-title-wrapper">
                    <h1 className="drink-book-title book-title">{bookDetails.title}</h1>
                    <h2 className="author" style={renderCheck(bookDetails.author)}>by {bookDetails.author}</h2>
                    <div className="book-details-wrapper">
                        <img className="book-drink-img" style={renderCheck(bookDetails.bookImg)} src={bookDetails.bookImg} alt={"Book Cover of " + bookDetails.title} />
                        <div className="book-text">
                            <p style={renderCheck(bookDetails.description)}>{bookDetails.description}</p>
                            <p style={renderCheck(bookDetails.publisher)}>Publisher: {bookDetails.publisher}</p>
                            <a style={renderCheck(bookDetails.nytReviewLink)} href={bookDetails.nytReviewLink}>The New York Times Reviews</a>
                            <a style={renderCheck(bookDetails.amazonProductUrl)} href={bookDetails.amazonProductUrl}>Buy on amazon!</a>
                        </div>
                    </div>
                    </div>
                    <div className="drink-title-wrapper">
                        <h1 className="drink-book-title">{ drinkDetails.name}</h1>
                    <div className="drink-details-wrapper">
                        <div className="drink-text">
                            {drinkError && <Error messageType={'drink'} />}
                            <div className="ingredient-glass-instruction-wrapper">
                                <p style={renderCheck(drinkDetails.ingredient1)}>Ingredients:</p>
                                <ol className="ingredient-list">
                                    <li style={renderCheck(drinkDetails.ingredient1)}>{`${ drinkDetails.ingredient1} ~ ${ drinkDetails.measure1}`}</li>
                                    <li style={renderCheck(drinkDetails.ingredient2)}>{`${ drinkDetails.ingredient2} ~ ${ drinkDetails.measure2}`}</li>
                                    <li style={renderCheck(drinkDetails.ingredient3)}>{`${ drinkDetails.ingredient3} ~ ${ drinkDetails.measure3}`}</li>
                                    <li style={renderCheck(drinkDetails.ingredient4)}>{`${ drinkDetails.ingredient4} ~ ${ drinkDetails.measure4}`}</li>
                                    <li style={renderCheck(drinkDetails.ingredient5)}>{`${ drinkDetails.ingredient5} ~ ${ drinkDetails.measure5}`}</li>
                                    <li style={renderCheck(drinkDetails.ingredient6)}>{`${ drinkDetails.ingredient6} ~ ${ drinkDetails.measure6}`}</li>
                                    <li style={renderCheck(drinkDetails.ingredient7)}>{`${ drinkDetails.ingredient7} ~ ${ drinkDetails.measure7}`}</li>
                                    <li style={renderCheck(drinkDetails.ingredient8)}>{`${ drinkDetails.ingredient8} ~ ${ drinkDetails.measure8}`}</li>
                                    <li style={renderCheck(drinkDetails.ingredient9)}>{`${ drinkDetails.ingredient9} ~ ${ drinkDetails.measure9}`}</li>
                                    <li style={renderCheck(drinkDetails.ingredient10)}>{`${ drinkDetails.ingredient10} ~ ${ drinkDetails.measure10}`}</li>
                                    <li style={renderCheck(drinkDetails.ingredient11)}>{`${ drinkDetails.ingredien11} ~ ${ drinkDetails.measure11}`}</li>
                                    <li style={renderCheck(drinkDetails.ingredient12)}>{`${ drinkDetails.ingredient12} ~ ${ drinkDetails.measure12}`}</li>
                                    <li style={renderCheck(drinkDetails.ingredient13)}>{`${ drinkDetails.ingredient13} ~ ${ drinkDetails.measure13}`}</li>
                                    <li style={renderCheck(drinkDetails.ingredient14)}>{`${ drinkDetails.ingredient14}~ ${ drinkDetails.measure14}`}</li>
                                    <li style={renderCheck(drinkDetails.ingredient15)}>{`${ drinkDetails.ingredient15} ~ ${ drinkDetails.measure15}`}</li>
                                </ol>
                                <p style={renderCheck(drinkDetails.glass)}>Glass: {drinkDetails.glass}</p>
                                <p style={renderCheck(drinkDetails.instructions)}>Instructions: { drinkDetails.instructions}</p>
                            </div>
                        </div> 
                        <img className="book-drink-img" style={renderCheck(drinkDetails.img)} src={ drinkDetails.img} alt={"Picture of " +  drinkDetails.name}/>      
                    </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Details