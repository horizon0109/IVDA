<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="20">
          <ScatterPlot/>
        </v-col>
        <v-col cols="12" md="10">
          <WordCloudPlot/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import ScatterPlot from './ScatterPlot';
import WordCloudPlot from './WordCloudPlot';
export default {
  components: {ScatterPlot, WordCloudPlot},
  data: () => ({
  }),
}
</script>



