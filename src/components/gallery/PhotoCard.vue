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
export default {
    name: 'photoCard',

    props: {
        photo: {
            type: Object,
            required: true
        }
    },

    methods: {
        handleClick() {
            this.$emit('click', this.photo)
        }
    }
};
</script>