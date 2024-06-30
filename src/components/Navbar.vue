<template>
    <v-container fluid>
        <v-app-bar
            app
            color="deep-purple accent-4"
            dense
            dark
        >
            <v-app-bar-nav-icon @click="showNav"></v-app-bar-nav-icon>

            <v-toolbar-title>Title</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer
            v-model="navDrawer"
            app
            temporary
        >
            <v-list
                nav
                dense
            >
                <v-list-item-group
                    v-model="mainGroup"
                    active-class="deep-purple--text text--accent-4"
                >
                    <router-link to="/">
                        <v-list-item>
                            <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Home</v-list-item-title>
                        </v-list-item>
                    </router-link>

                    <router-link to="/gallery">
                        <v-list-item>
                            <v-list-item-icon>
                            <v-icon>mdi-view-gallery</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Gallery</v-list-item-title>
                        </v-list-item>
                    </router-link>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </v-container>
</template>

<script>
export default {
    name: 'navbar',

    data: () => ({
        navDrawer: false,
        mainGroup: null,
    }),

    methods: {
        showNav() {
            this.navDrawer = true;
        }
    }
}
</script>