<template>
  <v-app>
    <v-app-bar
      app
      color="#02894b"
      dark
    >
      <div class="d-flex align-center">
        FlyQuest Analyst App 2021
      </div>
      
      <v-btn class='mx-10' to='/'>
        Task 1 - Bootcamp Stats
      </v-btn>

      <v-btn to='/patchInfo' class='ml-0 mr-10'>
        Task 2 - Meta Trends
      </v-btn>

      <v-btn to='/scrims' class='ml-0 mr-10'>
        Task 3/4 - Scrim Database
      </v-btn>

      <v-spacer></v-spacer>
      
     
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
</style>