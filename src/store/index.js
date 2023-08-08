import { createStore } from 'vuex'
import router from '../router'
import empleados from '../modules/empleados'
import cargos from '../modules/cargos'
import cajas from '../modules/cajas'
import cierrecajas from '../modules/cierrecajas'

export default createStore({
state: {
    listcuadre:[],
    cuadre:{
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
        totalbs: 0,
        diferenciabs: 0
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
    } ,
    calcular(){
        if (this.cuadre.tasa1 === 0) {
            alert('¡¡¡ Ingrese la tasa del dia !!!')
            return
        }
    }  
},
modules: { empleados, cargos, cajas, cierrecajas }
})