import Vue from 'vue'
import Vuex from 'vuex'

import ModA from './mod_a'
import ModB from './mod_b';

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        a: 13,
        b: 14,
        users: []
    },
    mutations: {
        addA(state, n) {
            state.a += n;
        },
        addB(state, n) {
            state.b += n;
        },
        readUsers(state, users) {
            state.users = users;
        },
        setOnline(state, id) {
            state.users.forEach(user => {
                if (user.id == id) {
                    user.online = true
                }
            })
        }
    },
    actions: {
        addA({commit}, n) {
            commit('addA', n)
        },
        addB({commit}, n) {
            commit('addB', n)
        },
        async readUsers({commit}) {
            let users = await (await fetch('http://localhost:8899/user.txt')).json();
            commit('readUsers', users);
        },
        setOnline({commit}, id) {
            commit('setOnline', id)
        }
    },
    getters: {
        count(state) {
            return state.a + state.b
        },
        onlineUsers(state) {
            return state.users.filter(user => user.online)
        }
    },
    modules: {
        mod_a: ModA,
        mod_b: ModB
    }
})
