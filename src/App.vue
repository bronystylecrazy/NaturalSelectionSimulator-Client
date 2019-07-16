<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Natural Selection Simulator</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/" exact>Dashboard</v-btn>
        <v-btn flat to="/environment" exact>Environment</v-btn>
        <v-btn flat>Screenshot</v-btn>
        <v-btn flat>Meet Developers</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      //
    };
  }
};
</script>
