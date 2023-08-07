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
	        localStorage.setItem('listCierres', JSON.stringify(state.listCierres))
	    },		 
	},
	actions:{
		cargarLocalStorageCierreCajas({commit}){
	        if (localStorage.getItem('listCierres')) {
	            commit('cargarCierreCajas', JSON.parse(localStorage.getItem('listCierres')))
	            return
	        }
	        localStorage.setItem('listCierres', JSON.stringify([]))
	    },
	    setListCierres({commit}, listCierres){
	    	commit('set', listCierres)
	    	localStorage.removeItem('listcuadre')
	    	location.reload()
	    }		
	}
}