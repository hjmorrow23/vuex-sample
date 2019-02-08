import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        power: ''
    },
    mutations: {
        changePower(state, power) {
            state.power = power;
        }
    },
    getters: {
        power: state => state.power,
    }
});