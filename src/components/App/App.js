import { useEffect, useState } from 'react'
import { Route, NavLink, Routes, useLocation } from "react-router-dom"
import './App.css'
import { getData } from '../../apiCalls/GETRequests'
import { cleanBookListData, cleanDrinkListData } from '../../utilities/utilities'
import Error from '../Error/Error'
import Logo from '../Logo/Logo'
import Navbar from '../Navbar/Navbar'
import BookList from '../BookList/BookList'
import Favorites from '../Favorites/Favorites'
import Details from '../Details/Details'
import PageNotFound from '../PageNotFound/PageNotFound'

function App() {
  const [error, setError] = useState(false)
  const [pairingList, setPairingList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [clicked, setClicked] = useState('home')
 

  useEffect(() => {
    const createPairingList = async () => {

      try{

        const bookData = await getData("https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=SxKAfSsd0aI1RxZ1XPKUIjpd6w7RjZzJ")
        const drinkData = await getData("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
        //https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Alcoholic (id and name only- long list)
        //www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=11007 (get full cocktail's details by id )
        const cleanedBookList = cleanBookListData(bookData)
        const cleanedDrinkList = cleanDrinkListData(drinkData)
        const createdPairingList = cleanedBookList.map(book => {
        const randomDrink = cleanedDrinkList[Math.floor(Math.random()*cleanedDrinkList.length)]
            return {
              book: book,
              drink: randomDrink,
              isSaved: false
            }
        })

        setPairingList(createdPairingList)
        setIsLoading(false)
      } catch(error) {
              console.error(error)
              setError(true)
              setIsLoading(false)
      }
    }
    createPairingList()
  }, [])


const closeError = () => {
  setError(false)
}

const clearClicked = () => {
  setClicked('')
}

const updateError = () => {
  setError(true);
};

const toggleSavePairing = (id) => {
  const newPairingsList = pairingList.map(pairing => {
    if(pairing.book.title === id) {
      return {
        ...pairing,
        isSaved: !pairing.isSaved,
      }
    }
    return pairing
  })
  setPairingList(newPairingsList)
}

  return (
    <div className="App">
      {error && <Error closeError={closeError} />}
      <header>
      <Logo />
      <Navbar setClicked={setClicked} clicked={clicked} />
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <BookList
              pairingList={pairingList}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites 
            pairingList={pairingList}
            toggleSavePairing={toggleSavePairing}
            />}
        />
        <Route
          path="/details/:id"
          element={
            <Details
              pairingList={pairingList}
              clearClicked={clearClicked}
              updateError={updateError}
              toggleSavePairing={toggleSavePairing}
            />
          }
        />
        <Route path="*" element={<PageNotFound clearClicked={clearClicked} setClicked={setClicked} />} />
      </Routes>

    </div>
  );

}

export default App;
