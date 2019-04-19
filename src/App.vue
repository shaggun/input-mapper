<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3">
        <app-header></app-header>
        <app-points></app-points>
      </div>
      <div class="col-lg-9">
        <!-- /.card -->
        <app-graph graphName="Linear" :graphType="0" :graphDescription="description0"></app-graph>
        <!-- /.card -->
        <app-graph graphName="Quadratic" :graphType="1" :graphDescription="description1"></app-graph>
        <!-- /.card -->
        <app-graph graphName="Quadratic (Negative)" :graphType="2" :graphDescription="description2"></app-graph>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Points from "./components/Points";
import Graph from "./components/Graph";
export default {
  name: "app",
  data() {
    return {
      description0: "Linear mapping.",
      description1:
        "Quadratic, smooth at the beginning. (This equation only works when x>=0)",
      description2:
        "Quadratic, negative and displaced to the right, it's smoother at the end. (This equation only works when x>=0)"
    };
  },
  components: {
    appHeader: Header,
    appPoints: Points,
    appGraph: Graph
  }
};
</script>

<style>
</style>
