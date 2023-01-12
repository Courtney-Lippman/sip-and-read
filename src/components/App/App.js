import { useEffect, useState } from 'react'
import { Route, NavLink, Routes, useLocation } from "react-router-dom"
import './App.css'
import { fetchData } from '../../apiCalls/GETRequests'
import { cleanBookListData, cleanDrinkListData } from '../../utilities/utilities'
import Logo from '../Logo/Logo'
import { FaHome, BsSuitHeartFill } from 'react-icons/fa'

function App() {
  const [bookList, setBookList] = useState([])
  const [drinkList, setDrinkList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [pairingList, setPairingList] = useState([])
  const [clicked, setClicked] = useState('home')


  useEffect(() => {
    fetchData("https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=SxKAfSsd0aI1RxZ1XPKUIjpd6w7RjZzJ")
    .then(data => {
      console.log('book data', data)
      // setBookList(cleanBookListData(data))
      setIsLoading(false)
    })
    .catch(error => {
      console.log(error.status)
      // setIsLoading(false)
      //need to set error for an error message here as well as an isLoading
    })

    fetchData("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
    .then((data) => {
      console.log('Drink data', data)
      //setDrinkList(cleanDrinkListData(data))
    })
    .catch(error => {
      console.log(error.status)
      //need to set error for an error message here as well as an isLoading
    })
  }, [])


// const createPairList = () => {
//   console.log('bookList', bookList)
//   const createdPairingList = bookList.map(book => {
//     console.log('book', book)
//     const randomDrink = drinkList[Math.floor(Math.random()*drinkList.length)]
//       return {
//         book: book,
//         drink: randomDrink
//       }
//   } )
//   console.log('createdPairingList', createdPairingList)
//   return createdPairingList
// }



const clearClicked = () => {
  setClicked('')
}

  return (
    <div className="App">
      {/* {error && <Error closeError={closeError} />} */}
      <header>
      <Logo />
      <nav>
        <NavLink className={clicked === 'home' ? 'button selected' : 'button'} id='home-button' to="/" onClick={() => setClicked('home')}>
          <FaHome />
        </NavLink>
        <NavLink className={clicked === 'favorites' ? 'button selected' : 'button'} id='fav-button' to="/favorites"   onClick={() => setClicked('favorites')}>
            <BsSuitHeartFill />
        </NavLink>
      </nav>
      </header>
      {/* <Route
        path="/details/:id"
        element={      <Details bookList={bookList} drinkList={drinkList} />}
      /> */}

    </div>
  );

}

export default App;
