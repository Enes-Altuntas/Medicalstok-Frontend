export const state = () => ({
    overlay: false,
})

export const mutations = {
    setOverlay(state, payload) {
        state.overlay = payload
    },
}

export const getters = {
    getOverlayStatus: (state) => {
        return state.overlay
    }
}

export const actions = {
    async login({ commit }, payload) {
        commit('setOverlay', true)
        await this.$axios({ method: 'post', url: '/api/login', headers: {}, data: payload })
            .then(res => {
                if (res.status === 200) {
                    localStorage.setItem('access_token', res.data.accessToken)
                    localStorage.setItem('refresh_token', res.data.refreshToken)
                    this.$router.push('/main')
                }
            })
            .catch(error => {
                localStorage.removeItem('refresh_token')
                localStorage.removeItem('access_token')
                this.$toast.show(error.response.data, {
                    theme: "bubble",
                    type: 'error',
                    position: "bottom-right",
                    duration: 5000,
                })
            })
        commit('setOverlay', false)
    },
    async main({ commit }) {
        // commit('setOverlay', true)
        // await this.$axios({ method: 'post', url: '/api/main', headers: { 'Authorization': 'Bearer ' + localStorage.getItem('access_token'), "X-Auth-Token": 'Basic ' + localStorage.getItem('refresh_token') } })
        //     .then(res => {
        //         if (res.status === 200) {
        //             if (res.data.accessToken) {
        //                 localStorage.setItem('access_token', res.data.accessToken)
        //             }
        //         }
        //     })
        //     .catch(error => {
        //         this.$router.push('/login');
        //         localStorage.removeItem('refresh_token')
        //         localStorage.removeItem('access_token')
        //         if (error.response.status === 403) {
        //             this.$toast.show(error.response.data, {
        //                 theme: "bubble",
        //                 type: 'error',
        //                 position: "bottom-right",
        //                 duration: 5000,
        //             })
        //         }
        //     })
        // commit('setOverlay', false)
    },
}