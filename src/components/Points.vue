<template>
  <form>
    <div class="form-row">
      <div class="col-sm-6">
        <label>x1</label>
        <input v-model.number="x1" class="form-control" placeholder="X1">
      </div>
      <div class="col-sm-6">
        <label>x2</label>
        <input v-model.number="x2" class="form-control" placeholder="X2">
      </div>
      <br>
      <br>
      <div class="col-sm-6">
        <label>y1</label>
        <input v-model.number="y1" class="form-control" placeholder="Y1">
      </div>
      <div class="col-sm-6">
        <label>y2</label>
        <input v-model.number="y2" class="form-control" placeholder="Y2">
      </div>
      <div class="col-sm-6">
        <br>
        <button class="btn btn-primary mb-2" @click.prevent="calculate">Graph</button>
        <p class="error-msg">{{errorMsg}}</p>
      </div>
    </div>
  </form>
</template>

<script>
import { eventBus } from "../main.js";

export default {
  data() {
    return {
      x1: 0,
      x2: 1,
      y1: 0,
      y2: 1,
      errorMsg: ""
    };
  },
  computed: {
    label: function() {
      return this.$store.getters.points.x1;
    }
  },

  methods: {
    calculate() {
      if (
        this.isNumeric(this.x1) &&
        this.isNumeric(this.x2) &&
        this.isNumeric(this.y1) &&
        this.isNumeric(this.y2)
      ) {
        if (this.x1 !== this.x2 && this.y1 !== this.y2) {
          const pointsObj = {
            x1: this.x1,
            x2: this.x2,
            y1: this.y1,
            y2: this.y2
          };
          this.errorMsg = "";
          this.$store.commit("setPoints", pointsObj);
          eventBus.$emit("plotGraph", "3");
        } else {
          this.errorMsg = "Only Chuck Norris can divide by Zero";
        }
      } else {
        this.errorMsg = "Only numbers, please";
      }
    },
    isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }
  }
};
</script>

<style scoped>
.form-horizontal {
  max-width: 300px;
  background-color: aqua;
}
.col-sm-6 {
  padding-left: 0px;
}
.submit {
  margin: 0px;
}
.form-control.invalid {
  border: 1px solid red;
  background-color: rgb(250, 202, 202);
}
.error-msg {
  color: red;
}
</style>
