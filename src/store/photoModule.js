import axios from 'axios'

export default {
    state: {
        photos: [],
        isDialogVisible: false,
        selectedPhoto: {}
    },
    mutations: {
        setPhotos(state, payload) {
            state.photos = payload
        },
        addPhoto(state, payload) {
            state.photos = [...state.photos, payload]
        },
        showDialog(state, payload) {
            state.selectedPhoto = payload
            state.isDialogVisible = true
        },
        hideDialog(state) {
            state.isDialogVisible = false
        },
    },
    getters: {
        getAllPhotos: (state) => state.photos,
        getDialogVisibility: (state) => state.isDialogVisible,
        getSelectedPhoto: (state) => state.selectedPhoto
    },
    actions: {
        fetchPhotos(context) {
            axios.get('https://jsonplaceholder.typicode.com/photos', {
                params: {
                    _limit: 10,
                }
            }).then(response => context.commit('setPhotos', response.data))
        }
    }
}