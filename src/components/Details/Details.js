import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getDrinkDetails } from "../../apiCalls/GETRequests"
import { cleanRandomDrinkData } from "../../utilities/utilities"
import './Details.css'

const Details = ({ pairingList, clearClicked, updateError }) => {
    const [drinkDetails, setDrinkDetails] = useState({})
    const { id } = useParams()
    const foundPairing = pairingList.find(pairing => pairing.book.title === id)
    const drinkId = foundPairing.drink.id
    const bookDetails = foundPairing.book

    useEffect(() => {
        const createDrinkDetails = async (id) => {
            try {
                const drinkDetailsData = await getDrinkDetails(id)
                const cleanDrinkDetails = cleanRandomDrinkData(drinkDetailsData)
                setDrinkDetails(cleanDrinkDetails)
            } catch(error) {
                console.error(error)
                // setError(true)
                // setIsLoading(false)
            }
        }
        createDrinkDetails(drinkId)
    }, [])

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
                <h1 className="drink-title">{ drinkDetails.name}</h1>
                <img src={ drinkDetails.img} alt={"Picture of " +  drinkDetails.name}/>
                <p>{ drinkDetails.glass}</p>
                <p>Instructions: { drinkDetails.instructions}</p>
                <p>Ingredients:</p>
                <ol>
                    <li>{`${ drinkDetails.ingredient1} ${ drinkDetails.measure1}`}</li>
                    <li>{`${ drinkDetails.ingredient2} ${ drinkDetails.measure2}`}</li>
                    <li>{`${ drinkDetails.ingredient3} ${ drinkDetails.measure3}`}</li>
                    <li>{`${ drinkDetails.ingredient4} ${ drinkDetails.measure4}`}</li>
                    <li>{`${ drinkDetails.ingredient5} ${ drinkDetails.measure5}`}</li>
                    <li>{`${ drinkDetails.ingredient6} ${ drinkDetails.measure6}`}</li>
                    <li>{`${ drinkDetails.ingredient7} ${ drinkDetails.measure7}`}</li>
                    <li>{`${ drinkDetails.ingredient8} ${ drinkDetails.measure8}`}</li>
                    <li>{`${ drinkDetails.ingredient9} ${ drinkDetails.measure9}`}</li>
                    <li>{`${ drinkDetails.ingredient10} ${ drinkDetails.measure10}`}</li>
                    <li>{`${ drinkDetails.ingredien11} ${ drinkDetails.measure11}`}</li>
                    <li>{`${ drinkDetails.ingredient12} ${ drinkDetails.measure12}`}</li>
                    <li>{`${ drinkDetails.ingredient13} ${ drinkDetails.measure13}`}</li>
                    <li>{`${ drinkDetails.ingredient14} ${ drinkDetails.measure14}`}</li>
                    <li>{`${ drinkDetails.ingredient15} ${ drinkDetails.measure15}`}</li>
                </ol>    
            </div>
        </div>
    )
}

export default Details