export default{
	namespaced:true,
	state:{
		listCierres:[]
	},
	mutations:{
		cargarCierreCajas(state, payload){
	        state.listCierres = payload
	    },
	    set(state, payload){
	        state.listCierres.push(payload)
	        // localStorage.setItem('listCierres', JSON.stringify(state.listCierres))
	    },		 
	},
	actions:{
		async cargarLocalStorageCierreCajas({commit}){
			try {
				const res = await fetch('http://localhost:8000/api/getcierre');	
				const db = await res.json();
				commit ('cargarCierreCajas', db.data)
			} catch (error) {
				console.log(error)
			}
	        // if (localStorage.getItem('listCierres')) {
	        //     commit('cargarCierreCajas', JSON.parse(localStorage.getItem('listCierres')))
	        //     return
	        // }
	        // localStorage.setItem('listCierres', JSON.stringify([]))
	    },
	    async setListCierres({commit}, listCierres){
			try {
				const res = await fetch('http://localhost:8000/api/insertcierre', {
					method:'POST',
					headers:{
						'Content-type':'application/json'
					},
					body:JSON.stringify(listCierres)
				});
				const dataDB = await res.json();
				commit('set', listCierres)
			} catch (error) {
				console.log(error)
			}
	    	// localStorage.removeItem('listcuadre')
	    	// location.reload()
	    }		
	}
}