export default{
	namespaced:true,
	state:{
		listCajas:[],
	    caja:{
	        id:'',
	        nombreCaja:'',
	        descripcion:'',
	        is_rrss:false
	    }
	},
	mutations:{
		cargarCajas(state, payload){
	        state.listCajas = payload
	    },
		setCajas(state, payload){
        	state.listCajas.push(payload)
        	localStorage.setItem('listCajas', JSON.stringify(state.listCajas))
	    },	    
	    updateCajas(state, payload){
	        state.listCajas = state.listCajas.map(item => item.id === payload.id ? payload : item)
	        localStorage.setItem('listCajas', JSON.stringify(state.listCajas))
	    },
	    eliminarCajas(state, payload){
	        state.listCajas = state.listCajas.filter(item => item.id !== payload)
	        localStorage.setItem('listCajas', JSON.stringify(state.listCajas))
	    },      
	},
	actions:{
		cargarLocalStorageCajas({commit}){
	        if (localStorage.getItem('listCajas')) {
	            commit('cargarCajas', JSON.parse(localStorage.getItem('listCajas')))
	            return
	        }
	        localStorage.setItem('listCajas', JSON.stringify([]))
	    },
		setCaja({commit}, caja){
	        commit('setCajas', caja)
	    },
	    modificarCaja({commit}, caja){
	        commit('updateCajas', caja)
	    },
	    deleteCaja({commit}, id){
	        commit('eliminarCajas', id)
	    },
	}
}