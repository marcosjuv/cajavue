export default{
	namespaced:true,
	state:{
		listCajas:[],
	    caja:{
	        id:'',
	        caja:'',
	        descripcion:'',
	        is_rrss:0
	    }
	},
	mutations:{
		cargarCajas(state, payload){
	        state.listCajas = payload
	    },
		setCajas(state, payload){
        	state.listCajas.push(payload)
        	// localStorage.setItem('listCajas', JSON.stringify(state.listCajas))
	    },	    
	    updateCajas(state, payload){
	        state.caja = state.listCajas.map(item => item.id === payload.id ? payload : item)
	        // localStorage.setItem('listCajas', JSON.stringify(state.listCajas))
	    },
	    eliminarCajas(state, payload){
	        state.listCajas = state.listCajas.filter(item => item.id !== payload)
	        // localStorage.setItem('listCajas', JSON.stringify(state.listCajas))
	    },      
	},
	actions:{
		async cargarLocalStorageCajas({commit}){
			try {
				const res = await fetch('http://localhost:8000/api/getcajas');	
				const db = await res.json();				
				commit ('cargarCajas', db.data)				
			} catch (error) {
				console.log(error)
			}
	    },

		async setCaja({commit}, caja){
			try {
				const res = await fetch('http://localhost:8000/api/insertcajas', {
					method:'POST',
					headers:{
						'Content-type':'application/json'
					},
					body:JSON.stringify(caja)
				});
				const dataDB = await res.json();
				commit('setCajas', caja)				
			} catch (error) {
				console.log('error aqui: ', error)
			}
	    },

	    async modificarCaja({commit}, caja){
			try {
				const res = await fetch(`http://localhost:8000/api/updatecajas/${caja.id}`,{
					method:'PUT',
					headers:{
						'Content-type':'application/json'
					},
					body:JSON.stringify(caja)
				});
				const dataDB = await res.json();
				commit('updateCajas', caja)
			} catch (error) {
				console.log(error)
			}
	    },

	    async deleteCaja({commit}, id){
			await fetch(`http://localhost:8000/api/deletecajas/${id}`,{
				method:"DELETE",
			})
	        commit('eliminarCajas', id)
	    },
	}
}