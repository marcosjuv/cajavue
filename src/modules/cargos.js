export default{
	namespaced:true,
	state:{
		listCargos:[],
	    cargo:{
	        id:'',
	        cargo:'',
	        descripcion:''
	    }
	},
	mutations:{
		cargarCargos(state, payload){
	        state.listCargos = payload
	    },
		setPuesto(state, payload){
        	state.listCargos.push(payload)
        	localStorage.setItem('listCargos', JSON.stringify(state.listCargos))
	    },	    
	    updatePuesto(state, payload){
	        state.listCargos = state.listCargos.map(item => item.id === payload.id ? payload : item)
	        localStorage.setItem('listCargos', JSON.stringify(state.listCargos))
	    },
	    eliminarPuesto(state, payload){
	        state.listCargos = state.listCargos.filter(item => item.id !== payload)
	        localStorage.setItem('listCargos', JSON.stringify(state.listCargos))
	    },      
	},
	actions:{
		cargarLocalStorageCargo({commit}){
	        if (localStorage.getItem('listCargos')) {
	            commit('cargarCargos', JSON.parse(localStorage.getItem('listCargos')))
	            return
	        }
	        localStorage.setItem('listCargos', JSON.stringify([]))
	    },
		setCargo({commit}, cargo){
	        commit('setPuesto', cargo)
	    },
	    modificarCargo({commit}, cargo){
	        commit('updatePuesto', cargo)
	    },
	    deleteCargo({commit}, id){
	        commit('eliminarPuesto', id)
	    },
	}
}