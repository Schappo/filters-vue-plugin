import Vue from 'vue'
import './filtes'
import { simNao } from './filtes'

export default {
    install(Vue) {
        Vue.filter('simNao', simNao)
    }
}