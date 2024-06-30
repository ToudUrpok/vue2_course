<template>
    <v-container>
        <addPhotoForm />
        <v-row>
            <photoCard
                v-for="photo in $store.getters.getAllPhotos"
                :photo="photo"
                :key="photo.id"
            />
        </v-row>
        <viewPhotoDialog

        />
    </v-container>
</template>

<script>
import photoCard from '@/components/gallery/PhotoCard'
import addPhotoForm from '@/components/gallery/AddPhotoForm'
import viewPhotoDialog from '@/components/gallery/ViewPhotoDialog'
import { mapActions } from 'vuex';

export default {
    name: 'GalleryPage',

    components: {
        photoCard, addPhotoForm, viewPhotoDialog
    },

    data: () => ({
    }),

    mounted() {
        this.fetchPhotos()
    },

    methods: {
        ...mapActions(['fetchPhotos']),
    }
};
</script>