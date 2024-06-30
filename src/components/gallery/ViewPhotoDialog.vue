<template>
    <v-dialog
        v-model="isVisible"
        max-width="500"
    >
        <v-card>
            <v-img
                :src="photo.url"
            />
            <v-card-title>
                {{ fullTitle }}
            </v-card-title>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'viewPhotoDialog',

    props: {
        photo: {
            type: Object,
            required: true
        },
        value: {
            type: Boolean,
            default: false
        }
    },

    created() {
        this.isVisible = this.value
    },

    data: () => ({
        isVisible: false
    }),

    watch: {
        value(value) {
            this.isVisible = value
        },
        isVisible(value) {
            this.$emit('input', value)
        }
    },

    computed: {
        fullTitle() {
            return `Photo Name: ${this.photo.title}`
        }
    }
};
</script>