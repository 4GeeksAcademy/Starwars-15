const getState = ({ getStore, getActions, setStore }) => {
    //porque no use getStore? no seria para coger la informacion... ?//
    return {
        store: {
            demo: [],
            test: "funciona",
            marte1: [],
            marte2: {},
            start1: [],
            start2: {},
            personas1: [],
            personas2: {},
            favoritos: []
            

        },
        actions: {
            createPlanets: () => {
                fetch("https://www.swapi.tech/api/planets/")
                    .then(res => res.json())
                    .then(data => {setStore({ marte1:data.results }) 
                    
                } )
                    .catch(err => console.error(err))
            },


        eachPlaneta: (id) => {
            fetch(`https://www.swapi.tech/api/planets/${id}`)
                .then(res => res.json())
                .then(data => {setStore({ marte2:data.result.properties }) 
                
            } )
                .catch(err => console.error(err)) 
    },
    
    createVehicles: () => {
        fetch("https://www.swapi.tech/api/vehicles/")
            .then(res => res.json())
            .then(data => {setStore({ start1:data.results }) 
            
        } )
            .catch(err => console.error(err))
    },

    eachVehicle: (id) => {
        fetch(`https://www.swapi.tech/api/vehicles/${id}`)
            .then(res => res.json())
            .then(data => {setStore({ start2:data.result.properties }) 
            
        } )
            .catch(err => console.error(err)) 
},
    createPersonas1: () => {
        fetch("https://www.swapi.tech/api/personas1/")
            .then(res => res.json())
            .then(data => {setStore({ personas1:data.results }) 
        
    } )
        .catch(err => console.error(err))
},

    eachPersonas2: (id) => {
        fetch(`https://www.swapi.tech/api/personas1/${id}`)
            .then(res => res.json())
            .then(data => {setStore({ personas2:data.result.properties }) 
        
    } )
        .catch(err => console.error(err)) 
},
    addFavorito:(favorito) => {
        
        setStore({ favoritos:getStore().favoritos.concat(favorito)}) //traer el favorito que ya tiene y anadir uno nuevo
    },

    /* checkFavorito:(favorito) => {
        const favorites = getStore().favorites;
        if (favorites.indexOf(favorito) !== -1) {
          getActions().removeFavorite(favorito);
        }
        getActions().addFavorito(favorito);
    },

    removeFavorite:(favorito) => {
        setStore({favoritos: getStore().favoritos.filter((element) => element !== favorito),})
        
    } */
}
}};

export default getState;