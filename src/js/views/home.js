import React from "react";
/* import rigoImage from "../../img/rigo-baby.jpg"; *///no lo necesito
import "../../styles/home.css";
import { createPlanets } from "./planetas.js";//no se "conecta"...
import getState from "./planetas.js"; //no se funciona tampoco...
import { Link } from "react-router-dom";

export const Home = () => (
	 <div className="text-center">
		<div className="card">
			<Link to="/planetas">
			<img id="contenedor"src="https://i.ytimg.com/vi/0cXgjUsxZvY/maxresdefault.jpg" className="card-img-top" alt="Planet Rodian"/>
  			<h2>PLANETAS</h2>
  			<div id="planetInfo"> </div>
			  </Link>
	</div>
		/{/* /necesita boton que abra la crad de planeta// */}
	<div className="card">
		<Link to="/naves">
			<img id="contenedor"src="https://i.blogs.es/6ab8ee/tiefighter-cb96942652b6abe3324039c9d1166510-1200x800/450_1000.jpg"/>
  			<h2>NAVES</h2>
  			<div id="navesInfo"> </div>
			  </Link>
	</div>
			{/* //necesita boton que conecte a personas// */}
	<div className="card">
		<Link to="/people">
			<img id="contenedor"src="https://cdn6.dibujos.net/images/listas/los-mejores-personajes-de-star-wars.jpg" className="card-img-top" alt="Tusken Raiders"/>
  			<h2>PERSONAJES</h2>
  			<div id="personasInfo"> </div>
			  </Link>

	</div>										
	</div> 
	

	
);