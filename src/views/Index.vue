<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/"><img src="/logo1.PNG"></router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <router-link class="nav-link" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/form">Check</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

            <!--- Image Slider -->
            <div id="slides" class="carousel slide" data-ride="carousel">
            <ul class="carousel-indicators">
                <li data-target="#slides" data-slide-to="0" class="active"></li>
                <li data-target="#slides" data-slide-to="1"></li>
                <li data-target="#slides" data-slide-to="2"></li>
            </ul>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="/img1.jpg">
                    <div class="carousel-caption">
                        <h1 class="display-2">Osteoporosis</h1>
                        <h3>Detection and Prediction</h3>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="/bone1.jpg">
                </div>
                <div class="carousel-item">
                    <img src="/osteoporosisMain.jpg">
                </div> 
            </div>
            </div>

            <!--- Section -->
            <div class="container-fluid padding">
                <div class="row padding">
                    <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
                        <h2>What is Osteoporosis?</h2>
                        <p>Osteoporosis is a condition that affects the bones.The inside of a healthy bone has small spaces, like a honeycomb. Osteoporosis increases the size of these spaces, causing the bone to lose strength and density. In addition, the outside of the bone grows weaker and thinner.People with osteoporosis are at a high risk of fractures, or bone breaks, while doing routine activities such as standing or walking. The most commonly affected bones are the ribs, hips, and the bones in the wrists and spine.</p>
                    </div>
                </div>
                <hr class="my-4">
            </div>

            <!--- Connect -->
            <div class="container-fluid padding">
                <div class="row text-center padding">
	                <div class="col-12">
		                <h2><i>"WE WANT TO PROMOTE BETTER BONE HEALTH TO ALL AGES!"</i></h2>
	                </div>
	            <div class="col-12 social padding">
		            <a href="#"><i class="fab fa-facebook"></i></a>
		            <a href="#"><i class="fab fa-twitter"></i></a>
		            <a href="#"><i class="fab fa-instagram"></i></a>
		            <a href="#"><i class="fab fa-youtube"></i></a>
	            </div>
                </div>
            </div>

            <!--- Footer -->
            <footer>
                <div class="container-fluid">
                    <div class="row text-center">
                        <div class="col-12">
                            <hr class="light">
                            <h5>&copy;project</h5>
                        </div>
                    </div> 
                </div>
            </footer>
    </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,700");

html,
body {
  height: 100%;
  width: 100%;
  font-family: "Poppins", sans-serif;
  color: #222;
}
.navbar {
  padding: 0.8rem;
}
.navbar-nav li {
  padding-right: 20px;
}
.nav-link {
  font-size: 1.1em !important;
}
.carousel-inner img {
  width: 100%;
  height: 100%;
}
.carousel-caption {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.carousel-caption h1 {
  font-size: 500%;
  text-transform: uppercase;
  text-shadow: 1px 1px 15px #000;
}
.carousel-caption h3 {
  font-size: 200%;
  font-weight: 500;
  text-shadow: 1px 1px 10px #000;
  padding-bottom: 1rem;
}

.social a {
  font-size: 4.5em;
  padding: 3rem;
}
.fa-facebook {
  color: #3b5998;
}
.fa-twitter {
  color: #00aced;
}
.fa-instagram {
  color: #517fa4;
}
.fa-youtube {
  color: #bb0000;
}
.fa-facebook:hover,
.fa-twitter:hover,
.fa-instagram:hover,
.fa-youtube:hover {
  color: #d5d5d5;
}
footer {
  background-color: #3f3f3f;
  color: #d5d5d5;
}

/*---Media Queries --*/
@media (max-width: 992px) {
  .social a {
    font-size: 4em;
    padding: 2rem;
  }
}
@media (max-width: 768px) {
}
@media (max-width: 576px) {
}

/*---Firefox Bug Fix --*/
.carousel-item {
  transition: -webkit-transform 0.5s ease;
  transition: transform 0.5s ease;
  transition: transform 0.5s ease, -webkit-transform 0.5s ease;
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
}
/*--- Fixed Background Image --*/
figure {
  position: relative;
  width: 100%;
  height: 60%;
  margin: 0 !important;
}
.fixed-wrap {
  clip: rect(0, auto, auto, 0);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
#fixed {
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  will-change: transform;
}
/*--- Bootstrap Padding Fix --*/
[class*="col-"] {
  padding: 1rem;
}
</style>