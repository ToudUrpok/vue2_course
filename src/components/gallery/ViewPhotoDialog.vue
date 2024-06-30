<template>
    <v-dialog
        v-model="getDialogVisibility"
        max-width="500"
        @click:outside="hideDialog"
    >
        <v-card>
            <v-img
                :src="getSelectedPhoto.url"
            />
            <v-card-title>
                {{ getSelectedPhoto.title }}
            </v-card-title>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'viewPhotoDialog',

    methods: {
        ...mapMutations(['hideDialog']),
    },

    computed: {
        ...mapGetters(['getSelectedPhoto', 'getDialogVisibility'])
    }
};
</script>