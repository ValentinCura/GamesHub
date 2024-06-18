import React, { useEffect, useState } from 'react'
import './FilterBar.css'
import { Form } from 'react-bootstrap'

const FilterBar = ({ products, onHandleFilteredGames }) => {
    const [showFilter, setShowFilter] = useState(false)
    const gameStyleList = [...new Set(products.flatMap(product => product.gameStyle))]
    const [selectedStyles, setSelectedStyles] = useState([]);
    const [totalProducts, setTotalProducts] = useState([])

    useEffect(()=>{
        setTotalProducts(products)
    },[])


    const handleStyleChange = (style) => {
        setSelectedStyles(totalProducts.includes(style)
            ? totalProducts.filter(s => s !== style)
            : [...totalProducts, style])
        onHandleFilteredGames(selectedStyles)
    }



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
                            <input type="checkbox" value={style} onChange={() => handleStyleChange(style)} />
                            <p>{style}</p>
                        </label>
                    ))}

                </div>


            </Form>
        </>
    )
}

export default FilterBar