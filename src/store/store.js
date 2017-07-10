import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        value: 0
    },

    getters: {
        doubleCounter: state => {
            return state.counter*2;
        },

        stringCounter: state => {
            return state.counter + ' Clicks';
        },

        getValue: state => {
            return state.value;
        }
    },

    mutations: {
        increment: (state, payload) => {
            state.counter += payload;
        },
        decrement: (state, payload) => {
           state.counter -= payload;
        },

        updateValue: (state, changedValue) => {
            state.value = changedValue;
        }
    },

    actions: {
        increment: ({ commit }, payload) => {
            commit('increment', payload);
        },
        decrement: ({ commit }, payload) => {
            commit('increment', payload);
        },
        asynIncrement: ({ commit }, payload) => {
            setTimeout(()=>{
                commit('increment', payload.by);
            }, payload.duration);
        },
        asynDecrement: ({ commit }, payload) => {
            setTimeout(()=>{
                commit('decrement', payload.by);
            }, payload.duration);
        },

        updateValue: ({ commit }, changedValue) => {
            commit('updateValue', changedValue);
        }
    }
});