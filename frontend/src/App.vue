<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <h2>Timi - 500 Cities CDC</h2>
    </v-app-bar>
    <v-main>
      <ScatterPlot/>
    </v-main>
  </v-app>
</template>


<script>
import ScatterPlot from "./components/ScatterPlot";
export default {
  name: 'App',
  components: {
    ScatterPlot,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
/* disable scrolling */
html {
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */
}
html::-webkit-scrollbar {
  width: 0px; /* For Chrome, Safari, and Opera */
}
</style>
