<template>
    <div>
        <div class="container-fluid padding">
            <div class="row text-center padding">
                <div class="col-12">
                    <h1>{{message.title}}</h1>
                    <br>
                    <p>{{message.content}}</p>
                </div>
            </div>
            <hr class="my-4">
        </div>
        <div v-if="!hasOsteo">
        <div class="container-fluid padding">
            <div class="row padding">
                <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
                    <ul>
                      <h2> Things to include in your diet   <i class="fa fa-utensils"></i></h2>
                        <li>Fish</li>
                        <li>Milk</li>
                        <li>Egg</li>
                        <li>Banana</li>
                        <li>Almond</li>
                        <li>Cabbage</li>
                        <li>Beans</li>
                        <li>Yogurt  etc....</li>
                    </ul>
                </div>
            </div>
            <hr class="my-4">
        </div>

        <div class="container-fluid padding">
            <div class="row ">
                <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
                    <ul>
                      <h2> Recommended Exercises for YOU<i class="fa fa-child"></i> <i class="fa fa-heartbeat"></i></h2></ul>
                    <div class="row">
                      <div class="card" style="width:300px">
                          <img class="card-img-top" src="/jumping-jacks.gif" alt="Card image" style="width:100%">
                          <div class="card-body">
                          <h4 class="card-title text-center" style="color: black;">Modified Jumping Jacks</h4>
                          </div>
                      </div>
                      
                      <div class="card" style="width:300px">
                          <img class="card-img-top" src="/squats.gif" alt="Card image" style="width:100%">
                          <div class="card-body">
                          <h4 class="card-title text-center" style="color: black;">Squats</h4>
                          </div>
                      </div>
                      
                      <div class="card" style="width:300px">
                          <img class="card-img-top" src="/crunches.gif" alt="Card image" style="width:100%">
                          <div class="card-body">
                          <h4 class="card-title text-center" style="color: black;">Crunches</h4>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div v-if="hasOsteo">
        <div class="container-fluid padding">
            <div class="row padding">
                <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
                    <ul>
                      <h2> Things to include in your diet   <i class="fa fa-utensils"></i></h2>
                        <li> Green Leafy Vegetables</li>
                        <li>Lemons</li>
                        <li>Prunes</li>
                        <li>Pumpkin</li>
                        <li>Nuts</li>
                        <li>Yogurt  etc....</li>
                    </ul>
                </div>
            </div>
            <hr class="my-4">
        </div>

        <div class="container-fluid padding">
            <div class="row ">
                <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
                    <ul>
                      <h2> Recommended Exercises for YOU<i class="fa fa-child"></i> <i class="fa fa-heartbeat"></i></h2></ul>
                    <div class="row">
                      <div class="card" style="width:300px">
                          <img class="card-img-top" src="/jogging.gif" alt="Card image" style="width:100%">
                          <div class="card-body">
                          <h4 class="card-title text-center" style="color: black;">Jogging</h4>
                          </div>
                      </div>
                      
                      <div class="card" style="width:300px">
                          <img class="card-img-top" src="/jump_rope.gif" alt="Card image" style="width:100%">
                          <div class="card-body">
                          <h4 class="card-title text-center" style="color: black;">Jump Ropes</h4>
                          </div>
                      </div>
                      
                      <div class="card" style="width:300px">
                          <img class="card-img-top" src="/knee-circles.gif" alt="Card image" style="width:100%">
                          <div class="card-body">
                          <h4 class="card-title text-center" style="color: black;">Knee Circles</h4>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <hr class="my-4">	
    </div>
</template>

<script>
export default {
  data() {
    return {
      message: {
        title: "",
        content: ""
      },
      hasOsteo: false
    };
  },
  mounted() {
    const percentage = this.$route.params.percent;
    if (percentage > 0.6) {
      this.hasOsteo = true;
      this.message.title = "You have Osteoporosis!";
      this.message.content =
        "According to the data entered by you, the system has predicted that you have osteoporosis. Although you can’t completely reverse osteoporosis, there are ways to manage it. Some of those methods are things you can do every day through diet and exercise.";
    } else {
      this.message.title = "Congratulations! You don't have Osteoporosis";
      this.message.content =
        "According to the data entered by you, the system has predicted that you do not have osteoporosis. You have a normal bone. But still here are some of things you can do every day through diet and exercise inorder to prevent osteoporosis in the future. ";
    }
  }
};
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=Roboto");

.card {
  margin-left: 22px;
}

body {
  font-family: "Roboto", sans-serif;
  background-size: cover;
}

.main-section {
  margin: 0 auto;
  margin-top: 130px;
  padding: 0;
}

.modal-content {
  background-color: #3b4652;
  opacity: 0.98;
  padding: 0 18px;
  box-shadow: 0px 0px 3px #848484;
}

.form-group {
  margin-bottom: 18px;
  padding-top: 20px;
}

.form-group input {
  height: 42px;
  border-radius: 5px;
  border: 0;
  font-size: 18px;
  padding-left: 54px;
}

.form-group::before {
  font-family: "Font Awesome\ 5 Free";
  content: "\f007";
  position: absolute;
  font-size: 22px;
  color: #555e60;
  left: 28px;
  padding-top: px;
}

.age {
  margin-right: 6px;
}

.custom-switch {
  position: left;
  top: 20%;
  left: -15%;
  transform: translate(20%, 20%);
}

input[type="checkbox"] {
  position: relative;
  width: 40px;
  height: 20px;
  -webkit-appearance: none;
  background: #c6c6c6;
  outline: none;
  border-radius: 20px;
  box-shadow: inset 0 0 5px rgba(255, 0, 0, 0.2);
  transition: 0.5s;
}
input:checked[type="checkbox"] {
  background: #03a9f4;
}
input[type="checkbox"]:before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  top: 0;
  left: 0;
  background: #ffffff;
  transform: scale(1.1);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}
input:checked[type="checkbox"]:before {
  left: 20px;
}
button {
  width: 40%;
  margin: 5px 0 25px;
}
.btn {
  background-color: #27c2a5;
  color: #fff;
  font-size: 19px;
  padding: 7px 14px;
  border-radius: 8px;
  border-bottom: 4px solid #219882;
  margin: 15px;
}
.btn:hover,
.btn:focus {
  background-color: #25a890 !important;
  border-bottom: 4px solid #25a890;
}
html,
body {
  height: 100%;
  width: 100%;
  font-family: "Poppins", sans-serif;
  background: url("/dark.jpg") no-repeat center center fixed;
  background-size: cover;
  color: #fff !important;
}
</style>