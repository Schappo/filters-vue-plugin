import Vue from 'vue'
import './filtes'
import {
    simNao,
    valorReal,
    data,
    cnpj,
    cpf,
} from './filtes'

export default {
    install(Vue) {
        Vue.filter('simNao', simNao)
        Vue.filter('valorReal', valorReal)
        Vue.filter('data', data)
        Vue.filter('cnpj', cnpj)
        Vue.filter('cpf', cpf)
    }
}
