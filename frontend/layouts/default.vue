<template>
  <v-app style="font-family: Kanit">
    <v-app-bar fixed app color="white" elevation="1">
      <v-container grid-list-xs>
        <v-img
          max-height="40"
          max-width="40"
          src="https://app.dtac.co.th/vaccine/assets/images/logo-dtac@2x.png"
        ></v-img>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
   
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
