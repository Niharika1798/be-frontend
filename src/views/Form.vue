<template>
<div class="container text-center">
  <div class="col-sm-4 main-section">
      <form class="col-12" style="background-color: #3b4652">
        <div class="form-group">
          <input type="text" class="form-control" id="fname" placeholder="First Name">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" id="lname" placeholder="Last Name">
        </div>
        <div class="form">
          <label class="age" for="quantity">Age: </label>
          <input type="number" id="quantity" name="quantity" min="1" max="100" class="control-label">
        </div>
        <div class="form" >
          <label class="weight" for="quantity" style="padding-top:15px">Weight: </label>
          <input type="number" id="quantity" name="quantity" min="1" max="500" class="control-label">
        </div>
        <div class="form">
          <label class="label control-label">Gender:</label>
        </div>
          <div class="form-check-inline">
            <label class="form-check-label">
              <input type="radio" class="form-check-input" id="radio1" name="optradio" value="male" checked>Male
            </label>
          </div>
          <div class="form-check-inline">
            <label class="form-check-label">
              <input type="radio" class="form-check-input" id="radio1" name="optradio" value="female" >Female
            </label>
          </div>
          <div class="form-check-inline">
            <label class="form-check-label">
              <input type="radio" class="form-check-input" id="radio1" name="optradio" value="other">Other
            </label>
          </div>
          <div class="form row">
            <div class="col-sm-2" style="margin-left:60px">Smoking?</div>
              <div class="col-sm-5">
                <div class="form-check">
                  <input class="form-check-input" v-model="smoking" type="checkbox">
                </div>
              </div>
            </div>
        <div class="form row">
          <div class="col-sm-2" style="margin-left:60px">Alcohol?</div>
          <div class="col-sm-4">
            <div class="form-check">
              <input class="form-check-input" v-model="alcohol" type="checkbox">
            </div>
          </div>
        </div>
        <div class="form row">
          <div class="col-sm-4" style="margin-left:60px">Discolouration?</div>
            <div class="col-sm-4">
              <div class="form-check">
              <input class="form-check-input" v-model="discolour" type="checkbox">
            </div>
          </div>
        </div> 
        <div class="form row">
          <div class="col-sm-8" style="margin-left:30px">History of Fractures?</div>
            <div class="form-check">
              <div class="col-sm-6">
                <input class="form-check-input" v-model="frac" type="checkbox">
              </div>
            </div>
        </div>
        <div class="form row">
          <div class="col-sm-8" style="margin-left:17px ">Family History of Osteoporois?</div>
            <div class="form-check">
              <div class="col-sm-10">  
                <input class="form-check-input" v-model="history" type="checkbox">
              </div>
            </div>
        </div>
        <div class="form-group row center-align">
          <div class="col-sm-12">
            <button @click.prevent="submitForm()" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
  </div>
</div>
    
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      age: "0",
      weight: "0",
      gender: "0",
      history: "",
      frac: "",
      discolour: "",
      smoking: "",
      alcohol: ""
    };
  },
  methods: {
    convertToValidInput(val) {
      if (val == "" || val == "0" || val == false) {
        return 0;
      } else {
        return 1;
      }
    },
    submitForm() {
      let modelData = [
        this.convertToValidInput(this.smoking),
        this.convertToValidInput(this.alcohol),
        this.convertToValidInput(this.gender),
        this.convertToValidInput(this.discolour),
        this.convertToValidInput(this.frac),
        this.convertToValidInput(this.history),
        parseInt(this.age),
        parseInt(this.weight)
      ];
      console.log(modelData);
      axios
        .post("http://localhost:8000/detect", { features: modelData })
        .then(res => {
          const percentage = res.data;
          console.log(percentage);
          this.$router.push("/result/" + percentage);
        });
    }
  }
};
</script>
