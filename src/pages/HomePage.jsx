import { NavLink } from "react-router-dom";
import allBeers from '../assets/beers.png';
import randomBeer from "../assets/random-beer.png";
import createBeer from "../assets/new-beer.png"

function HomePage() {

    return(
        <div>
            <ul>
                <li className="home-li">
                    <NavLink to={'/beers'}>
                        <img src={allBeers} alt="All_Beers_img" />
                        <p>All Beers</p>
                    </NavLink>
                    <p style={{display: "none"}}>Lorem ipsum asit met</p>
                </li>
                <li className="home-li">
                    <NavLink to={'/random-beer'} className='home-a' >
                        <img src={randomBeer} alt="Random_Beer_img" />
                        <p>Random Beer</p>
                    </NavLink>
                    <p style={{display: "none"}}>Lorem ipsum asit met</p>
                </li>
                <li className="home-li">
                    <NavLink to={'/new-beer'} className="home-a" >
                        <img src={createBeer} alt="Create_Beer_img" />
                        <p>Create Beer</p>
                    </NavLink>
                    <p style={{display: "none"}}>Lorem ipsum asit met</p>
                </li>
            </ul>
        </div>
    )
}

export default HomePage;