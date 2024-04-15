/*import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const Planetas =() => {
    const {store,actions}= useContext(Context)
    const planets= store.planetas

useEffect(() => { 
    actions.createPlanets()
},[])
useEffect(() => { 
 console.log(store.planetas)
},[store.planetas])


    return(
        <>
        {planets?.map((planetas,index,) => (
            <div className="card row row-cols-auto" key={index}>
            <div className="card-body">
              <h5 className="card-title">{planetas.name}</h5>
              <Link to={`/planetas1/${planetas.uid}`} >Click para mas Info</Link> 
              <button type="button" class="btn btn-outline-danger">❤️</button>
            </div>
          </div>

        ))}

        <Link to="/">
        <button type="button" class="btn btn-dark">Back Home</button>
		</Link>
        </>
    
    )
}

export default Planetas*/

import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Planetas = () => {
    const { store, actions } = useContext(Context);
    const [likes, setLikes] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        actions.createPlanets();
    }, []);

    useEffect(() => {
        console.log(store.planetas);
    }, [store.planetas]);

    const handleLike = (planetaName) => {
        setLikes([...likes, planetaName]); // Agregar el nombre del planeta a los "Me gusta"
    };

    const addToFavorites = () => {
        setFavorites([...favorites, ...likes]); // Agregar los "Me gusta" a la lista de favoritos
        setLikes([]); // Limpiar la lista de "Me gusta"
    };

    const removeFromFavorites = (planetaName) => {
        setFavorites(favorites.filter(name => name !== planetaName)); // Eliminar un planeta de la lista de favoritos
    };

    return (
        <>
            <div className="d-flex justify-content-end mt-3">
                <button className="btn btn-primary dropdown-toggle" onClick={addToFavorites}>
                    Favoritos ({likes.length})
                </button>
            </div>
            {store.planetas?.map((planeta, index) => (
                <div className="card row row-cols-auto" key={index}>
                    <div className="card-body">
                        <h5 className="card-title">{planeta.name}</h5>
                        <Link to={`/planetas1/${planeta.uid}`}>Click para mas Info</Link>
                        <button className="btn btn-outline-danger" onClick={() => handleLike(planeta.name)}>
                            ❤️
                        </button>
                    </div>
                </div>
            ))}

            <div className="mt-3">
                {favorites.map((planetaName, index) => (
                    <div key={index}>
                        <span>{planetaName}</span>
                        <button className="btn btn-outline-danger ms-3" onClick={() => removeFromFavorites(planetaName)}>
                            Eliminar
                        </button>
                    </div>
                ))}
            </div>

            <Link to="/">
                <button type="button" className="btn btn-dark mt-3">Back Home</button>
            </Link>
        </>
    );
}

export default Planetas;