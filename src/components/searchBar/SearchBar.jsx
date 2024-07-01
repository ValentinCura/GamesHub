import React, { useState } from 'react'
import "./SearchBar.css"
const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = (gameSearch) => {
        onSearch(gameSearch);
        setSearchTerm(gameSearch);
    };
    return (
        <>
            <div className="mb-3 barinput">
                <input
                    type="text"
                    placeholder="Buscar"
                    name=""
                    id=""
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}/>

                <i className="bi bi-search searchicon"></i>
            </div>

        </>
    )
}

export default SearchBar