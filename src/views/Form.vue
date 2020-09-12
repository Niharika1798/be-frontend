<template>
    <div class="container">
      <form>
        <!-- <div class="form-group row">
          <div class="col-sm-6">
            <input type="text" class="form-control" id="fname" placeholder="First Name">
          </div>
          <div class="col-sm-6">
            <input type="text" class="form-control" id="lname" placeholder="Last Name">
          </div>
        </div> -->
         <div class="form-group row">
          <div class="col-sm-6">
            <input type="text" v-model="age" class="form-control" id="age" placeholder="Age">
          </div>
          <div class="col-sm-6">
            <input type="text" v-model="weight" class="form-control" id="weight" placeholder="Weight">
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-2">Smoking?</div>
          <div class="col-sm-10">
            <div class="form-check">
              <input class="form-check-input" v-model="smoking" type="checkbox">
            </div>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-2">Alcohol?</div>
          <div class="col-sm-10">
            <div class="form-check">
              <input class="form-check-input" v-model="alcohol" type="checkbox">
            </div>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-2">Discolouration?</div>
          <div class="col-sm-10">
            <div class="form-check">
              <input class="form-check-input" v-model="discolour" type="checkbox">
            </div>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-2">History of Fractures?</div>
          <div class="col-sm-10">
            <div class="form-check">
              <input class="form-check-input" v-model="frac" type="checkbox">
            </div>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-2">Family History of Osteoporois?</div>
          <div class="col-sm-10">
            <div class="form-check">
              <input class="form-check-input" v-model="history" type="checkbox">
            </div>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-10">
            <button @click.prevent="submitForm()" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      age: 0,
      weight: 0,
      history: false,
      // frac: false,
      discolour: false,
      smoking: false,
      alcohol: false
    };
  },
  methods: {
    submitForm() {
      console.log([
        age.value,
        weight.value,
        // frac.value,
        history.value,
        discolour.value,
        smoking.value,
        alcohol.value
      ]);
      let modelData = [1, 0, 0, 1, 1, 1, 25, 55];
      axios.post("http://localhost:8000/detect", modelData).then(res => {
        const data = res.data;
        console.log(data);
        const percentage = 0.453;
        this.$router.push("/result/" + percentage);
      });
    }
  }
};
</script>
