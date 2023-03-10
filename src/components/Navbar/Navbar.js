import { NavLink } from "react-router-dom"
import { FaHome } from 'react-icons/fa'
import { BsSuitHeartFill } from 'react-icons/bs'
import './Navbar.css'
import PropTypes from 'prop-types'

const Navbar = ({ setClicked, clicked }) => {
    return (
        <div className='navbar'>
            <NavLink className={clicked === 'home' ? 'button selected' : 'style-button'} id='home-button' to="/" onClick={() => setClicked('home')}>
                <FaHome className='style-button' />
            </NavLink>
            <NavLink className={clicked === 'favorites' ? 'button selected' : 'style-button'} id='fav-button' to="/favorites"   onClick={() => setClicked('favorites')}>
                <BsSuitHeartFill className='style-button' />
            </NavLink>
        </div>
    )
}

export default Navbar

Navbar.propTypes = {
        setClicked: PropTypes.func.isRequired,
        clicked: PropTypes.string.isRequired
}