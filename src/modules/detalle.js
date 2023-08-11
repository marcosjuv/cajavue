export default {
    namespaced:true,
    state: {
        detalles:[],
        corte:{
            supervisor:'',
            cajero:'',
            caja:'',
            is_rrss:false,      
            fecha:'',
            hora:'',
            tasa: 0,
            efectivo: 0,
            punto: 0,
            transferencia: 0,
            pendiente: 0,
            cash: 0,
            zelle: 0,
            premium: 0,
            monto_total: 0,
            diferencia: 0
        },
    },
    mutations: {
        loadDetails(state, payload){
            state.detalles = payload
        },
        set(state, payload){
            state.detalles.push(payload)
            // localStorage.setItem('detalles', JSON.stringify(state.detalles))
        }
    },
    actions: {
        async cargarDetalles({commit}){
            try {
                const res = await fetch('http://localhost:8000/api/getdetalle');	
                const db = await res.json();				
                commit ('loadDetails', db.data)				
            } catch (error) {
                console.log(error)
            }
        },
        setcorte({commit}, corte){
            commit('set', corte)
        }
    },
}