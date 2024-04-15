/*import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Naves =() => {
    const {store,actions}= useContext(Context)
    const naves= store.naves

useEffect(() => { 
    actions.createVehicles()
},[])
useEffect(() => { 
 console.log(store.naves)
},[store.naves])


    return(
        <>
        {naves?.map((naves,index,) => (
            <div className="card row row-cols-auto" key={index}>
            <div className="card-body">
              <h5 className="card-title">{naves.name}</h5>
              <Link to={`/naves1/${naves.uid}`}>Click for more Info</Link>
              <button className="btn btn-outline-danger" onClick={() => {actions.checkFavorito(people.name)}}>❤️</button>
            </div>
          </div>
            
        ))}

        <Link to="/">
        <button type="button" class="btn btn-dark">Back Home</button>
			
		</Link>
        </>
    )
}

export default Naves*/


import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Naves = () => {
    const { store, actions } = useContext(Context);
    const [totalLikes, setTotalLikes] = useState(0);
    const [likes, setLikes] = useState([]);

    const handleLike = () => {
        setTotalLikes(totalLikes + 1);
        setLikes([...likes, true]); // Almacenar un "Me gusta" para esta imagen
    };

    const handleUnlike = () => {
        if (likes.length > 0) {
            setTotalLikes(totalLikes - 1);
            const newLikes = [...likes];
            newLikes.pop(); // Eliminar el último "Me gusta" agregado
            setLikes(newLikes);
        }
    };

    useEffect(() => {
        actions.createVehicles();
    }, []);

    useEffect(() => {
        console.log(store.naves);
    }, [store.naves]);

    return (
        <div className="container">
            <div className="row justify-content-end">
                <div className="col">
                    <button className="btn btn-primary dropdown-toggle" onClick={handleUnlike}>
                        Favoritos ({totalLikes})
                    </button>
                </div>
            </div>

            {store.naves?.map((naves, index) => (
                <div className="card row row-cols-auto" key={index}>
                    <div className="card-body">
                        <h5 className="card-title">{naves.name}</h5>
                        <Link to={`/naves1/${naves.uid}`}>Click for more Info</Link>
                        <button className="btn btn-outline-danger" onClick={handleLike}>
                            ❤️
                        </button>
                    </div>
                </div>
            ))}

            <div className="row mt-3">
                <div className="col">
                    <Link to="/">
                        <button type="button" className="btn btn-dark">Back Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Naves;