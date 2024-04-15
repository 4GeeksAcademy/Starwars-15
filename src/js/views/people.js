import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const People = () => {
    const { store, actions } = useContext(Context);
    const [totalLikes, setTotalLikes] = useState(0);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        actions.createPeople();
    }, []);

    useEffect(() => {
        console.log(store.people);
    }, [store.people]);

    const handleLike = (peopleName) => {
        setTotalLikes(totalLikes + 1);
        setFavorites([...favorites, peopleName]); // Agregar el nombre de la persona a la lista de favoritos
    };

    const handleUnlike = (peopleName) => {
        if (favorites.includes(peopleName)) {
            setTotalLikes(totalLikes - 1);
            const newFavorites = favorites.filter(name => name !== peopleName); // Eliminar el nombre de la persona de la lista de favoritos
            setFavorites(newFavorites);
        } else {
            handleLike(peopleName); // Si la persona no está en la lista de favoritos, agregala
        }
    };

    return (
        <>
            <div className="float-end mb-3">
                <button className="btn btn-primary dropdown-toggle" onClick={() => setFavorites([])}>
                    Favoritos ({totalLikes})
                </button>
            </div>

            {store.people?.map((people, index) => (
                <div className="card row row-cols-auto" key={index}>
                    <div className="card-body">
                        <h5 className="card-title">{people.name}</h5>
                        <Link to={`/people1/${people.uid}`}>Click for more Info</Link>
                        <button className="btn btn-outline-danger" onClick={() => handleUnlike(people.name)}>
                            ❤️
                        </button>
                    </div>
                </div>
            ))}

            <Link to="/">
                <button type="button" className="btn btn-dark mt-3">Back Home</button>
            </Link>
        </>
    );
}

export default People;

/*import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const People = () => {
    const { store, actions } = useContext(Context);
    const [totalLikes, setTotalLikes] = useState(0);
    const [likes, setLikes] = useState([]);

    const handleLike = (peopleName) => {
        setTotalLikes(totalLikes + 1);
        setLikes([...likes, peopleName]); // Almacenar el nombre de la persona que le gusta
    };

    const handleUnlike = (peopleName) => {
        if (likes.includes(peopleName)) {
            setTotalLikes(totalLikes - 1);
            const newLikes = likes.filter(name => name !== peopleName); // Eliminar el nombre de la persona que le gusta
            setLikes(newLikes);
        }
    };

    const removeFromFavorites = (peopleName) => {
        setTotalLikes(totalLikes - 1);
        const newLikes = likes.filter(name => name !== peopleName); // Eliminar el nombre de la persona que le gusta
        setLikes(newLikes);
    };

    return (
        <>
            {store.people?.map((people, index) => (
                <div className="card row row-cols-auto" key={index}>
                    <div className="card-body">
                        <h5 className="card-title">{people.name}</h5>
                        <Link to={`/people1/${people.uid}`}>Click for more Info</Link>
                        <button className="btn btn-outline-danger" onClick={() => handleLike(people.name)}>
                            ❤️
                        </button>
                        <button className="btn btn-outline-primary" onClick={() => handleUnlike(people.name)}>
                            Remove Like
                        </button>
                    </div>
                </div>
            ))}

            <div className="mt-3">
                <button className="btn btn-outline-secondary" onClick={() => setLikes([])}>
                    Favoritos ({totalLikes})
                </button>
            </div>

            <Link to="/">
                <button type="button" className="btn btn-dark mt-3">Back Home</button>
            </Link>
        </>
    );
}

export default People;*/