import React, { useContext, useEffect, useState } from 'react'
import './FilterBar.css'
import { Form } from 'react-bootstrap'
import { ProductContext } from '../context/ContextProvider';

const FilterBar = ({ onHandleFilteredGames }) => {
    const { products, isLoading, error } = useContext(ProductContext);
    const [showFilter, setShowFilter] = useState(false)
    const gameStyleList = [...new Set(products.flatMap(product => product.gameStyle))]
    const [selectedStyles, setSelectedStyles] = useState([]);






    // const handleStyleChange = (style) => {
    //     setSelectedStyles(products.includes(style)
    //         ? totalProducts.filter(s => s !== style)
    //         : [...totalProducts, style])
    //     onHandleFilteredGames(selectedStyles)
    // }

    useEffect(() => {
        onHandleFilteredGames(selectedStyles);
    }, [selectedStyles]);

    const handleStyleChange = (style) => {
        if (selectedStyles.includes(style)) {
            setSelectedStyles(selectedStyles.filter(s => s !== style));
        } else {
            setSelectedStyles([...selectedStyles, style]);
        }
    };



    return (
        <>
            <div className='filterContainer'>
                <i className="bi bi-filter" onClick={() => setShowFilter(!showFilter)} />
            </div>

            <Form className={`filterChecks ${showFilter ? 'slide-in' : 'slide-out'}`}>
                <div>
                    <h3>Consola</h3>
                    <Form.Check // prettier-ignore
                        type={'checkbox'}
                        id={`default-`}
                        label={`PC`}
                    />

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