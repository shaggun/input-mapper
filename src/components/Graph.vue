<template>
  <div ref="graph" class="card mt-4">
    <div class="card-body">
      <h3 class="card-title">{{graphName}}</h3>
      <h4>Equation: y= {{equation}}</h4>
      <p class="card-text">{{graphDescription}}</p>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";
import * as functionPlot from "function-plot";
import { eventBus } from "../main";

export default {
  mounted() {
    this.holder = this.$refs.graph;
    this.generateGraph();
  },
  created() {
    eventBus.$on("plotGraph", data => {
      this.generateGraph();
    });
  },
  data() {
    return {
      something: "herro",
      holder: ""
    };
  },
  props: {
    graphName: String,
    graphType: Number, //0=lineal, 1=quadratic, 2=negative quadratic
    graphDescription: String
  },
  computed: {
    pointsObj: function() {
      return this.$store.getters.points;
    },
    mConst: function() {
      return (
        Math.round(
          ((this.pointsObj.y2 - this.pointsObj.y1) /
            (this.pointsObj.x2 - this.pointsObj.x1)) *
            100
        ) / 100
      );
    },
    equation: function() {
      return this.completeEquation(this.graphType, this.pointsObj, this.mConst);
    }
  },
  methods: {
    completeEquation(type, points, m) {
      if (type === 0) {
        const var1 = m !== 1 ? `${m}*x` : "x";
        const b = this.bConst(type, points, m);
        const var2 = b !== 0 ? (b < 0 ? `${b}` : `+${b}`) : "";

        return var1 + var2;
      }
      if (type === 1) {
        const var1 = m !== 1 ? `${m}*x^2` : "x^2";
        const b = this.bConst(type, points, m);
        const var2 = b !== 0 ? (b < 0 ? `${b}` : `+${b}`) : "";

        return var1 + var2;
      }
      if (type === 2) {
        const var1 = m !== 0 ? (m < 0 ? `${m}*(x-1)^2` : `-${m}*(x-1)^2`) : "";
        const b = this.bConst(type, points, m);
        const var2 = b !== 0 ? (b < 0 ? `${b}` : `+${b}`) : "";

        return var1 + var2;
      }
    },
    bConst(type, points, m) {
      switch (type) {
        case 0:
          return Math.round((points.y1 - m * points.x1) * 100) / 100;
        case 1:
          return (
            Math.round((points.y1 - m * Math.pow(points.x1, 2)) * 100) / 100
          );
        case 2:
          return (
            Math.round((Math.pow(points.x1 * m - m, 2) / m + points.y1) * 100) /
            100
          );
      }
    },
    generateGraph() {
      functionPlot({
        target: this.holder,
        xAxis: {
          label: "x - axis"
        },
        yAxis: {
          label: "y - axis",
          domain: [
            this.$store.getters.points.y1 - 1,
            this.$store.getters.points.y2 + 1
          ]
        },
        tip: {
          renderer: function() {}
        },
        grid: true,
        data: [
          {
            fn: this.equation
          }
        ]
      });
    }
  }
};
</script>

<style scoped>
</style>
