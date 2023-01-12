import cocktailGlass from '../../images/cocktailGlass.svg'
import bookStack from '../../images/bookStack.svg'
import './Logo.css'

const Logo = () => {
    return (
        <div className='logo'>
        <img src={cocktailGlass} alt="Black and white photo of a coupe cocktail glass with a cherry." />
        <h1 className="logo-text">Sip and Read</h1>
        <img src={bookStack} alt="A off center stack of books."/>
        </div>
    )
}

export default Logo