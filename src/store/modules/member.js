import api from '@/api'
import consts from '@/utils/consts'
import * as cookies from '@/utils/cookies'
// import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: cookies.get(consts.tokenKey),
    info: typeof cookies.get(consts.memberKey) === 'string' ? JSON.parse(cookies.get(consts.memberKey)) : cookies.get(consts.memberKey),
    avatar: ''
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
    cookies.set(consts.tokenKey, token)
  },
  SET_INFO: (state, info) => {
    state.info = info
    cookies.set(consts.memberKey, info)
  }
}

const actions = {
  // user login
  login({ commit }, params) {
    return new Promise((resolve, reject) => {
      api.member.login(params).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        commit('SET_INFO', data.info)
        resolve(response)
      }).catch(error => {
        console.log(error)
        reject(error)
      })
    })
  },

  // user register
  register({ commit }, params) {
    return new Promise((resolve, reject) => {
      api.member.register(params).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        commit('SET_INFO', data.info)
        resolve(response)
      }).catch(error => {
        console.log(error)
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      api.member.info({}).then(response => {
        const { data } = response

        if (!data) {
          return reject('Verification failed, please Login again.')
        }

        commit('SET_INFO', data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // member logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      api.member.logout({}).then(() => {
        cookies.remove() // must remove  token  first
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      cookies.remove() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

