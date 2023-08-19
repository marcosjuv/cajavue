import { createStore } from 'vuex'
import router from '../router'
import empleados from '../modules/empleados'
import cargos from '../modules/cargos'
import cajas from '../modules/cajas'
import cierrecajas from '../modules/cierrecajas'
import detalle from '../modules/detalle'

export default createStore({
state: {
    listcuadre:[],
    cuadre:{
        id:'',
        fecha:'',
        hora:'',
        supervisor:'',
        cajero:'',
        caja:'',
        is_rrss:false,      
        tasa: 0.00,
        efectivo: 0.00,
        punto: 0.00,
        transferencia: 0.00,
        pendiente: 0.00,
        cash: 0.00,
        zelle: 0.00,
        premium: 0.00,
        monto_total: 0.00,
        diferenciabs: 0.00
    },
},
getters: {},
mutations: {
    cargar(state, payload){
        state.listcuadre = payload
    },
    set(state, payload){
        state.listcuadre.push(payload)
        localStorage.setItem('listcuadre', JSON.stringify(state.listcuadre))
    },
    eliminar(state, payload){
        state.listcuadre = state.listcuadre.filter(item => item.id !== payload)
        localStorage.setItem('listcuadre', JSON.stringify(state.listcuadre))
    },
    getById(state, payload){
        if (!state.listcuadre.find(item => item.id === payload)) {
            router.push('/')
            return
        }
        state.cuadre = state.listcuadre.find(item => item.id === payload)
    },
    updateCuadre(state, payload){
        state.listcuadre = state.listcuadre.map(item => item.id === payload.id ? payload : item)
        router.push('/')
        localStorage.setItem('listcuadre', JSON.stringify(state.listcuadre))
    }    
},
actions: {
    cargarLocalStorage({commit}){
        if (localStorage.getItem('listcuadre')) {
            commit('cargar', JSON.parse(localStorage.getItem('listcuadre')))
            return
        }
        localStorage.setItem('listcuadre', JSON.stringify([]))
    },
    setCuadre({commit}, cuadre){
        commit('set', cuadre)
    },
    deleteCuadre({commit}, id){
        commit('eliminar', id)
    },
    getId({commit}, id){
        commit('getById', id)
    },
    modificarCuadre({commit}, cuadre){
        commit('updateCuadre', cuadre)
    }
},
modules: { empleados, cargos, cajas, cierrecajas, detalle }
})