const state = {
    value: 0
}

const getters = {
    getValue: state => {
        return state.value;
    }
}

const mutations = {
    updateValue: (state, changedValue) => {
        state.value = changedValue;
    }
}

const actions = {
    updateValue: ({ commit }, changedValue) => {
        commit('updateValue', changedValue);
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}