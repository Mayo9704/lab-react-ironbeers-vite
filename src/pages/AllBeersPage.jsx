import AllBeersCard from "../components/AllBeersCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function AllBeersPage() {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ axiosAnswer, setAxiosAnswer ] = useState([]);
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ search, setSearch ] = useState('');
    const [ showSearch, setShowSearch ] = useState(false);


    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                setAxiosAnswer(response.data);
                setIsLoading(false);
                console.log('info from the DB here ===>', response.data);
            })
            .catch(err => console.log(err));
    }, [])

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/search?' + searchParams)
            .then((res) => {
                setAxiosAnswer([...res.data]);
                setIsLoading(false);
                //console.log("response from the API ?",res)
            })
    }, [search])


    function handleSearch(e) {
        setSearch(e.target.value);
        setSearchParams("q=" + e.target.value);
    }

    function handleShowSearchBar() {
        setShowSearch(!showSearch);
    }

    if(isLoading){
        return(
            <div>
                <p>Loading...</p>
            </div>
        )
    }

    return(
        <div>
            <div>
                <h1>Beers</h1>
                <button className="btn btn-primary" onClick={handleShowSearchBar} >
                    {showSearch ? 'Hide' : 'Show'}  Search Bar
                </button>
            </div>

            {showSearch &&  <div>         
                                <label>
                                    <input className="search-bar-input" type="text" name="search" placeholder="Search here..." value={search} onChange={handleSearch} />
                                </label>
                            </div>     
            }

            {(axiosAnswer.length === 0) 
            ? <div><h1>No Beers Found</h1></div> 
            : axiosAnswer.map(beer => <AllBeersCard key={beer._id} beerPass={beer} />)
            }
        </div>
    )
}

export default AllBeersPage;
