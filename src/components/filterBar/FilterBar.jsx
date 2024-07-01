import React, { useContext, useEffect, useState } from 'react'
import './FilterBar.css'
import { Form } from 'react-bootstrap'
import { ProductContext } from '../context/ContextProvider';

const FilterBar = ({ onHandleFilteredGames }) => {
    const { products } = useContext(ProductContext);
    const [showFilter, setShowFilter] = useState(false);
    const gameStyleList = [...new Set(products.flatMap(product => product.gameStyle))];
    const [selectedStyles, setSelectedStyles] = useState([]);
    const gameConsoleList = [...new Set(products.flatMap(product => product.console))];
    const [selectedConsole, setSelectedConsole] = useState([]);

    useEffect(() => {
        onHandleFilteredGames(selectedStyles, selectedConsole);

    }, [selectedStyles, selectedConsole]);

    const handleStyleChange = (style) => {
        if (selectedStyles.includes(style)) {
            setSelectedStyles(selectedStyles.filter(s => s !== style));
        } else {
            setSelectedStyles([...selectedStyles, style]);
        }
        onHandleFilteredGames(selectedStyles, selectedConsole)
    };

    const handleConsoleChange = (consoleType) => {
        if (selectedConsole.includes(consoleType)) {
            setSelectedConsole(selectedConsole.filter(c => c !== consoleType));
        } else {
            setSelectedConsole([...selectedConsole, consoleType]);
        }
        onHandleFilteredGames(selectedStyles, selectedConsole)
    };




    return (
        <>
            <div className='filterContainer'>
                <i className="bi bi-filter" onClick={() => setShowFilter(!showFilter)} />
            </div>

            <Form className={`filterChecks ${showFilter ? 'slide-in' : 'slide-out'}`}>
                <div>
                    <h3>CONSOLA</h3>
                    {gameConsoleList.map(consoleType => (
                        <label key={consoleType} className='labelCheck'>
                            <input type="checkbox" value={consoleType} onChange={() => handleConsoleChange(consoleType)} checked={selectedConsole.includes(consoleType)} />
                            <p>{consoleType}</p>
                        </label>
                    ))}
                </div>

                <div className='styleFilter'>
                    <h3>GÉNERO</h3>
                    {gameStyleList.map(style => (
                        <label key={style} className='labelCheck'>
                            <input type="checkbox" value={style} onChange={() => handleStyleChange(style)} checked={selectedStyles.includes(style)} />
                            <p>{style}</p>
                        </label>
                    ))}

                </div>




            </Form>
        </>
    )
}

export default FilterBar