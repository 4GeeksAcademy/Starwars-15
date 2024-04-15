import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    const handleUnlikeAll = () => {
        actions.clearFavorites(); // Suponiendo que tienes una acción para limpiar todos los favoritos
    };

    return (
        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO1zFjG1fuitDiUaDDv_M8WNLUiBqx1c8fgjyHvB4Ngw&s" alt="Logo" style={{ width: '80px', height: 'auto', marginLeft: '50px' }} />
            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{marginRight: '20px'}}>
                Favoritos
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
                {store.favoritos?.map((favorito, index) => (
                    <div key={index}>
                        <li>
                            {favorito}
                        </li>
                    </div>
                ))}
                {store.favoritos && store.favoritos.length > 0 && (
                    <div>
                        <button className="dropdown-item" onClick={handleUnlikeAll}>
                            Eliminar Favoritos
                        </button>
                    </div>
                )}
            </ul>
        </nav>
    );
};