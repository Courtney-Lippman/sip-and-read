import { useEffect, useState } from 'react'
import { Route, NavLink, Routes, useLocation } from "react-router-dom"
import './App.css'
import { getData } from '../../apiCalls/GETRequests'
import { cleanBookListData, cleanDrinkListData } from '../../utilities/utilities'
import Error from '../Error/Error'
import Logo from '../Logo/Logo'
import BookList from '../BookList/BookList'
import Details from '../Details/Details'
import PageNotFound from '../PageNotFound/PageNotFound'
import { FaHome } from 'react-icons/fa'
import { BsSuitHeartFill } from 'react-icons/bs'

function App() {
  const [error, setError] = useState(false)
  const [pairingList, setPairingList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [clicked, setClicked] = useState('home')
 

  useEffect(() => {
    const createPairingList = async () => {

      try{

        const bookPromise = await getData("https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=SxKAfSsd0aI1RxZ1XPKUIjpd6w7RjZzJ")
        const drinkPromise = await getData("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
        //https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Alcoholic (id and name only- long list)
        //www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=11007 (get full cocktail's details by id )
        const cleanedBookList = cleanBookListData(bookPromise)
        const cleanedDrinkList = cleanDrinkListData(drinkPromise)
        const createdPairingList = cleanedBookList.map(book => {
        const randomDrink = cleanedDrinkList[Math.floor(Math.random()*cleanedDrinkList.length)]
            return {
              book: book,
              drink: randomDrink
            }
        })

        setPairingList(createdPairingList)

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

  return (
    <div className="App">
      {error && <Error closeError={closeError} />}
      <header>
      <Logo />
      <nav>
        <NavLink className={clicked === 'home' ? 'button selected' : 'button'} id='home-button' to="/" onClick={() => setClicked('home')}>
          <FaHome className='style-button' />
        </NavLink>
        <NavLink className={clicked === 'favorites' ? 'button selected' : 'button'} id='fav-button' to="/favorites"   onClick={() => setClicked('favorites')}>
            <BsSuitHeartFill className='style-button' />
        </NavLink>
      </nav>
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
        {/* <Route
          path="/favorites"
          element={
            <Favorites 
            bookList={bookList}
            />}
        /> */}
        <Route
          path="/details/:id"
          element={
            <Details
              pairingList={pairingList}
              clearClicked={clearClicked}
              updateError={updateError}
            />
          }
        />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>

    </div>
  );

}

export default App;
