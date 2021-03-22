import axios from 'axios';

const state = () => ({
    users: []
});

const getters = {
    allusers(state){
        return state.users;
    }
};

const actions = {
    async fetchUsers({commit}){
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        commit('saveallusers', response.data);
    },
    async saveuser({commit}, payload){
        /* const response = await axios.get("https://jsonplaceholder.typicode.com/users"); */
        commit('saveuser', payload);
    },
};

const mutations = {
    saveallusers(state, payload){
        state.users = payload;
    },
    saveuser(state, payload){
        payload.id = (state.users.length + 1);
        state.users.unshift(payload);
    }
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}