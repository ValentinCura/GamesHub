import React, { useState } from 'react'
import "./SearchBar.css"
const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = () => {
        onSearch(searchTerm);
    };
    return (

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
    )
}

export default SearchBar