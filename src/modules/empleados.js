export default{
	namespaced:true,
	state:{
		listEmpleados:[],
		filtroEmpleados:[],
	    empleado:{
	        id:'',
	        nombre:'',
	        apellido:'',
	        cedula:'',
	        is_supervisor:false,
	        is_cajero:false,
	        is_rrss:false,
	    }
	},
	mutations:{
		cargarEmpleados(state, payload){
	        state.listEmpleados = payload
	    },
		setEmploye(state, payload){
        	state.listEmpleados.push(payload)
        	localStorage.setItem('listEmpleados', JSON.stringify(state.listEmpleados))
	    },
	    eliminarEmploye(state, payload){
	        state.listEmpleados = state.listEmpleados.filter(item => item.id !== payload)
	        localStorage.setItem('listEmpleados', JSON.stringify(state.listEmpleados))
	    },
	    updateEmploye(state, payload){
	        state.listEmpleados = state.listEmpleados.map(item => item.id === payload.id ? payload : item)
	        localStorage.setItem('listEmpleados', JSON.stringify(state.listEmpleados))
	    },
	    Employe(state, payload){
	    	state.listEmpleados = state.listEmpleados.filter(item => item.is_rrss === payload)
	    }
	},
	actions:{
		cargarLocalStorageEmpleados({commit}){
	        if (localStorage.getItem('listEmpleados')) {
	            commit('cargarEmpleados', JSON.parse(localStorage.getItem('listEmpleados')))
	            return
	        }
	        localStorage.setItem('listEmpleados', JSON.stringify([]))
	    },
		setEmpleados({commit}, empleado){
	        commit('setEmploye', empleado)
	    },
	    modificarEmpleados({commit}, empleado){
	        commit('updateEmploye', empleado)
	    },
	    deleteEmpleados({commit}, id){
	        commit('eliminarEmploye', id)
	    },
	    Employe({commit}, empleado){
	    	commit('Employe', empleado)
	    }
	}
}