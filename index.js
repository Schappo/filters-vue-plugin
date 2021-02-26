import Vue from 'vue'
import './filtes'
import { simNao } from './filtes'

export default {
    install(Vue) {
        Vue.filter('simNao', simNao),
        Vue.filter('valorReal', valorReal),
        Vue.filter('data', data)
    }
}