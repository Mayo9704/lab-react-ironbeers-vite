import { Link } from "react-router-dom";
import homeImg from '../assets/home-icon.png';
import '../App.css'

function Navbar() {

    return(
        <div className="nav-bar">
            <nav className="navbar bg-dark border-bottom border-body">
                <ul>
                    <li><Link to={'/'} className={({isActive}) => isActive ? 'select' : ''}><img src={homeImg} /></Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;