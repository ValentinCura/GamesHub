import React, { useState } from 'react'
import "./SearchBar.css"
import FilterBar from '../filterBar/FilterBar';
const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = () => {
        onSearch(searchTerm);
    };
    return (
        <div className='searchContainer'>
            <div className='filterBarDiv'><FilterBar /></div>
            <div className="mb-3 barinput" >
                <input
                    type="text"
                    placeholder="Buscar"
                    name=""
                    id=""
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />

                <i className="bi bi-search searchicon" onClick={handleSearch}></i>
            </div>

        </div>
    )
}

export default SearchBar