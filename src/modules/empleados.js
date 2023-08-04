export default{
	namespaced:true,
	state:{
		listEmpleados:[],
		filtroEmpleados:[],
	    empleado:{
	        id:'',
	        name:'',
	        lastname:'',
	        card_id:'',
			email:'',
            password:'',
	        is_supervisor: false,
	        is_rrss: false,
	    }
	},
	mutations:{
		cargarEmpleados(state, payload){
	        state.listEmpleados = payload
	    },
		setEmploye(state, payload){
        	state.listEmpleados.push(payload)
        	// localStorage.setItem('listEmpleados', JSON.stringify(state.listEmpleados))
	    },
	    eliminarEmploye(state, payload){
	        state.listEmpleados = state.listEmpleados.filter(item => item.id !== payload)
	        // localStorage.setItem('listEmpleados', JSON.stringify(state.listEmpleados))
	    },
	    updateEmploye(state, payload){
	        state.listEmpleados = state.listEmpleados.map(item => item.id === payload.id ? payload : item)
	        // localStorage.setItem('listEmpleados', JSON.stringify(state.listEmpleados))
	    }
	},
	actions:{
		async cargarLocalStorageEmpleados({commit}){
			try {
				const res = await fetch('http://localhost:8000/api/getusers');	
				const db = await res.json();
				commit ('cargarEmpleados', db.data)				
			} catch (error) {
				console.log(error)
			}
	    },
		async setEmpleados({commit}, empleado){try {
			const res = await fetch('http://localhost:8000/api/insertuser', {
				method:'POST',
				headers:{
					'Content-type':'application/json'
				},
				body:JSON.stringify(empleado)
			});
			const dataDB = await res.json();		
	        commit('setEmploye', empleado)
		} catch (error) {
			console.log('error aqui: ', error)
		}
	    },
	    async modificarEmpleados({commit}, empleado){
			try {
				const res = await fetch(`http://localhost:8000/api/updateuser/${empleado.id}`,{
					method:'PUT',
					headers:{
						'Content-type':'application/json'
					},
					body:JSON.stringify(empleado)
				});
				const dataDB = await res.json();
				commit('updateEmploye', empleado)
			} catch (error) {
				console.log(error)
			}
	    },
	    async deleteEmpleados({commit}, id){
			await fetch(`http://localhost:8000/api/deleteuser/${id}`,{
				method:"DELETE",
			})
	        commit('eliminarEmploye', id)
	    }
	}
}