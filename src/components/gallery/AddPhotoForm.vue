<template>
    <v-form
        v-model="valid"
    >
        <v-row>
            <v-col
                cols="4"
            >
                <v-text-field
                    v-model="title"
                    :rules="titleRules"
                    :counter="20"
                    required
                    label="Photo Title"
                    clearable
                />
            </v-col>

             <v-col
                cols="6"
            >
                <v-file-input
                    v-model="photo"
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Pick a Photo"
                    prepend-icon="mdi-camera"
                    label="Photo"
                    show-size
                    required
                />
            </v-col>

            <v-col
                cols="2"
            >
                <v-btn
                    :disabled="!valid"
                    @click="handleAddClick"
                >
                    Add
                </v-btn>
            </v-col>
         </v-row>
    </v-form>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name: 'addPhotoForm',

    fileReader: undefined,

    data: () => ({
      valid: false,
      title: '',
      titleRules: [
        v => !!v || 'Title is required',
        v => v?.length <= 20 || 'Title must be less than 20 characters',
      ],
      photo: undefined,
    }),

    mounted() {
        this.fileReader = new FileReader()
        this.fileReader.onload = this.handlePhotoLoad
    },

    methods: {
        ...mapMutations(['addPhoto']),
        handleAddClick() {
            if (!this.valid) {
                return
            }
            
            this.fileReader.readAsDataURL(this.photo)
        },
        handlePhotoLoad() {
            const photo = {
                id: Date.now(),
                title: this.title,
                url: this.fileReader.result
            }

            this.addPhoto(photo)
        }
    },
};
</script>