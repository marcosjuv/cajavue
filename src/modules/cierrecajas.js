import router from '../router'
export default{
	namespaced:true,
	state:{
		listCierres:[],
		Cierres:{
			id:'',
		}
	},
	mutations:{
		cargarCierreCajas(state, payload){
	        state.listCierres = payload
	    },
	    set(state, payload){
	        state.Cierres = state.listCierres.push(payload)
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
	    	localStorage.removeItem('listcuadre')
			router.push('/consultas')
	    	// location.reload()
	    },
		async printDataCierre({commit}, id){
			try {
				const res = await fetch(`http://localhost:8000/api/getallcierre/${id}`,{
					method:'GET',
					headers:{
						'Content-type':'application/json',
						'Access-Control-Allow-Origin': '*'
					},
					// body:JSON.stringify(db.data)
				});
				const db = await res.json()
				console.log(db)
				commit (db.data)
			} catch (error) {
				console.log(error)
			}
		}	
	}
}