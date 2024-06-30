<template>
    <v-col cols="4">
        <v-card
            @click="handleClick"
        >
            <v-img
                :src="photo.url"
            />
            <v-card-title>
                {{ photo.title }}
            </v-card-title>
        </v-card>
        
    </v-col>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name: 'photoCard',

    props: {
        photo: {
            type: Object,
            required: true
        }
    },

    methods: {
        ...mapMutations(['showDialog']),
        handleClick() {
            this.showDialog(this.photo)
        }
    }
};
</script>