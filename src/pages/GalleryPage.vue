<template>
    <v-container>
        <addPhotoForm @addPhoto="addPhoto"/>
        <v-row>
            <photoCard
                v-for="photo in photos"
                :photo="photo"
                :key="photo.id"
                @click="openPhotoDialog"
            />
        </v-row>
        <viewPhotoDialog
            :photo="selectedPhoto"
            v-model="dialog"
        />
    </v-container>
</template>

<script>
import photoCard from '@/components/gallery/PhotoCard'
import addPhotoForm from '@/components/gallery/AddPhotoForm'
import viewPhotoDialog from '@/components/gallery/ViewPhotoDialog'

export default {
    name: 'GalleryPage',

    components: {
        photoCard, addPhotoForm, viewPhotoDialog
    },

    data: () => ({
        photos: [],
        selectedPhoto: {},
        dialog: false,
    }),

    mounted() {
        this.fetchPhotos()
    },

    methods: {
        fetchPhotos() {
            this.axios.get('https://jsonplaceholder.typicode.com/photos', {
                params: {
                    _limit: 10,
                }
            }).then(response => this.photos = response.data)
        },
        addPhoto(photo) {
            this.photos.push(photo)
        },
        openPhotoDialog(photo) {
            this.selectedPhoto = photo
            this.dialog = true;
        }
    }
};
</script>