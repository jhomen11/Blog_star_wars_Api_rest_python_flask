const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			starships: [],
			detallePersonaje: {},
			detallePlaneta: {},
			detalleStarships: {},
			favoritos: [],
			mostrarFavoritos: false
		},
		actions: {
			// Use getActions to call a function within a fuction

			// obtenerApi: async () => {
			// 	await fetch("https://www.swapi.tech/api/people")
			// 		.then(response => response.json())
			// 		.then(data => setStore({ personajes: data.results }))
			// 		.catch(error => console.log("error", error));
			// },
			// obtenerApiPlanets: async () => {
			// 	await fetch("https://www.swapi.tech/api/planets")
			// 		.then(response => response.json())
			// 		.then(data => setStore({ planetas: data.results }))
			// 		.catch(error => console.log("error"));
			// },
			obtenerApiStarships: async () => {
				await fetch("https://www.swapi.tech/api/starships")
					.then(response => response.json())
					.then(data => setStore({ starships: data.results }))
					.catch(error => console.log("error", error));
			},

			// verDetalle: async id => {
			// 	const store = getStore();
			// 	await fetch(`https://www.swapi.tech/api/people/${id}`)
			// 		.then(response => response.json())
			// 		//.then(data => console.log(data))
			// 		.then(data => {
			// 			setStore({ detallePersonaje: data.result.properties });
			// 		})
			// 		.catch(error => console.log("error", error));
			// },
			verDetallePlanets: async id => {
				const store = getStore();
				await fetch(`https://www.swapi.tech/api/planets/${id}`)
					.then(response => response.json())
					//.then(data => console.log(data))
					.then(data => {
						setStore({ detallePlaneta: data.result.properties });
					})
					.catch(error => console.log("error", error));
			},
			verDetalleStarships: async id => {
				const store = getStore();
				await fetch(`https://www.swapi.tech/api/starships/${id}`)
					.then(response => response.json())
					//.then(data => console.log(data))
					.then(data => {
						setStore({ detalleStarships: data.result.properties });
					})
					.catch(error => console.log("error", error));
			},
			agregarFavoritos: id => {
				const store = getStore();
				setStore({ favoritos: [...store.favoritos, store.personajes[id - 1]] });
			},
			agregarFavoritosPlanetas: id => {
				const store = getStore();
				setStore({ favoritos: [...store.favoritos, store.planetas[id - 1]] });
			},
			agregarFavoritosVehiculos: id => {
				const store = getStore();
				setStore({ favoritos: [...store.favoritos, store.starships[id]] });
			},
			eliminarFavoritos: index => {
				const store = getStore();

				const eliminar = store.favoritos.filter((el, i) => {
					return index !== i;
				});
				setStore({ favoritos: eliminar });
			},
			setMostrarFavoritos: e => {
				const store = getStore();
				setStore({ mostrarFavoritos: !store.mostrarFavoritos });
			},

			obtenerApi: async () => {
				await fetch("https://3000-aquamarine-donkey-cauaghje.ws-us23.gitpod.io/people")
					.then(response => response.json())
					.then(data => setStore({ personajes: data }))
					.catch(error => console.log("error", error));
			},

			verDetalle: async id => {
				const store = getStore();
				await fetch(`https://3000-aquamarine-donkey-cauaghje.ws-us23.gitpod.io/people/${id}`)
					.then(response => response.json())
					//.then(data => console.log(data))
					.then(data => {
						setStore({ detallePersonaje: data });
					})
					.catch(error => console.log("error", error));
			},

			obtenerApiPlanets: async () => {
				await fetch("https://3000-aquamarine-donkey-cauaghje.ws-us23.gitpod.io/planets")
					.then(response => response.json())
					.then(data => setStore({ planetas: data }))
					.catch(error => console.log("error"));
			},

			verDetallePlanets: async id => {
				const store = getStore();
				await fetch(`https://3000-aquamarine-donkey-cauaghje.ws-us23.gitpod.io/planets/${id}`)
					.then(response => response.json())
					//.then(data => console.log(data))
					.then(data => {
						setStore({ detallePlaneta: data });
					})
					.catch(error => console.log("error", error));
			}
		}
	};
};

export default getState;
