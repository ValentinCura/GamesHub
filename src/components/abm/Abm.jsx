import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import './Abm.css'
import { ProductContext } from '../context/ContextProvider';

const Abm = () => {
    const { addNewProduct } = useContext(ProductContext);
    const [showForm, setShowForm] = useState(false);
    const [gameName, setGameName] = useState("");
    const [gameGenre, setGameGenre] = useState([]);
    const [price, setPrice] = useState(0);
    const [console, setConsole] = useState("");
    const [image, setImage] = useState("");

    const handleForm = () => {
        setShowForm(!showForm);
    }

    const onHandleNewProduct = (e) =>{
        e.preventDefault();
        const productData = {
            gameName: gameName,
            gameStyle: gameGenre,
            price: price,
            console: console,
            gameImgUrl:image,
        }
        addNewProduct(productData);
    }

    const handleGameName = (e) => {
        setGameName(e.target.value);
    }

    const handleGameGenre = (e) => {
        setGameGenre(e.target.value);
    }

    const handlePrice = (e) => {
        setPrice(e.target.value);
    }

    const handleConsole = (e) => {
        setConsole(e.target.value);
    }

    const handleImage = (e) => {
        setImage(e.target.value);
    }

    return (
        <div className='formAbm'>
            {!showForm ?(
                <Button variant="dark" type="submit" onClick={handleForm}> Agregar productos</Button> 
            ) : (<Button variant="dark" type="submit" onClick={handleForm}> Ocultar</Button>)}

            {showForm &&
                <Form onSubmit={onHandleNewProduct}>
                    <h2>Nuevo producto</h2>
                    <div className="mb-3 inputAbm" controlId="formGameName">
                        <input type="text" placeholder="Nombre del juego" onChange={handleGameName} />
                    </div>
                    <div className="mb-3 inputAbm" controlId="formGenre">
                        <input type="text" placeholder="Genero" onChange={handleGameGenre} />
                    </div>
                    <div className="mb-3 inputAbm inputPriceConsole" controlId="formPriceConsole">
                        <input type="number" placeholder="Precio" onChange={handlePrice}/>
                        <input type="text" placeholder="Consola" onChange={handleConsole} />
                    </div>
                    <div className="mb-3 inputAbm" controlId="formImage">
                        <input type="text" placeholder="Imagen" onChange={handleImage}/>
                    </div>
                    <Button variant="dark" type="submit" >
                        Agregar producto
                    </Button>
                </Form>
            }
        </div>
    )
}

export default Abm