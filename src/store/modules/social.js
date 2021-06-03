
import { UserService } from '../../services/user.service'

const state =  {
    groups: null,
    userId: null,
    loadingProfileData: false,
    profileDataError: null,
    profileData: {
        username: null,
        email: null,
        firstName: null,
        lastName: null
    }
}

const getters = {
    groups: (state) => {
        return state.groups
    },
    profileData: (state) => {return state.profileData},
}

const actions = {
    async updateProfileData({ state, commit, dispatch }) {
        try{
            state.loadingProfileData = true
            const data = await UserService.getUserDetails();
            dispatch('fetchGroups')
            console.log(data)
            commit('updateProfileSuccess', {profileData: data})
        }
        catch (e) {
            commit('profileUpdateError', {errorCode: e.errorCode, errorMessage: e.message})
            console.log(e)
        }
    },
    async fetchGroups({ commit}){
        UserService.getUserGroups().then(resData => {
            commit('updateGroupsSuccess', {data: resData.results || []})
        }).catch((err) => {
            commit('profileUpdateError', {error: err})
        })
    },
}

const mutations = {
    profileUpdateError(state, {error}) {
        state.loadingProfileData = false
        state.profileDataError = error
    },

    updateProfileSuccess(state, {profileData}){
        // this assignment is done manually in case structure of profileData
        // from API changes (state.profileData remains constant)
        state.profileData.email = profileData.email
        state.profileData.firstName = profileData.first_name
        state.profileData.lastName = profileData.last_name
        state.profileData.username = profileData.username
        state.userId = profileData.pk
        state.loadingProfileData = false
    },
    updateGroupsSuccess(state, {data}){
        state.groups = data
        state.loadingProfileData = false
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}