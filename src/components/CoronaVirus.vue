<template>
  <div class="background">
    <b-container>
      <div class="row">
      <div class="d-flex row">
        <div class="text text-center col-lg-6 col-md-12 col-sm-12">
          <div class="d-flex text-center row col-lg-12 col-md-12 col-sm-12">
            <h1 class="col-lg-4 col-md-8 col-sm-12">corona</h1>
            <div class="text-2 text-center col-lg-2 col-md-4 col-sm-12 row">
              <p class="covido col-lg-12 col-md-12 col-sm-12">Covid-19</p>
              <p class="covido-2 col-lg-12 col-md-12 col-sm-12">Virus</p>
            </div>
          </div>
          <p class="info-of-covid">
            The Coronavirus (COVID-19) was first reported in Wuhan, Hubei, China
            in December 2019, the outbreak was later recognized as a pandemic by
            the World Health Organization (WHO) on 11 March 2020.
          </p>
          <div class="buttons d-flex justify-content-evenly text-center row ">
                  <div class="d-grid col-lg-6 col-md-6 col-sm-12">
                  <button class="btn btn-primary howtoprotect" type="button">How To Protect <font-awesome-icon icon="shield-alt"/></button>
  
          </div>
            <a href="" class="about-covid  col-lg-6 col-md-6 col-sm-12">About COVID-19 <font-awesome-icon icon="arrow-right"/></a>
          </div>
          <div class="numbers d-flex justify-content-around text-center row">
            <div class="col-lg-1 col-md-1 col-sm-1">
              <h2>WORLDWIDE CASES</h2>
              <p>8,949,671</p>
            </div>
            <div class="col-lg-1 col-md-1 col-sm-1">
              <h2>DEATHS</h2>
              <p>467,432</p>
            </div>
            <div class="col-lg-1 col-md-1 col-sm-1">
              <h2>RECOVERED</h2>
              <p>4,556,091</p>
            </div>
          </div>
          <div class="last-update">* Last updated: Jun 21, 2020, 09:24 AM America/Chicago</div>
        </div>
        <div class="photo col-lg-6 col-md-12 col-sm-12 row ">
        <img
         class="img col-lg-12 col-md-12 col-sm-12"
          src="../assets/images/header-a.png"
          alt=""
        />
        </div>
      </div>
      </div>
    </b-container>
  </div>
</template>
<style scoped>
.background {
  background-image: url("../assets/images/shape-a.png");
}
h1 {
  text-transform: var(--upper-case);
  font-size: 40px;
  color: var(--light-gray);
}
.text .d-flex h1 {
  text-transform: var(--upper-case);
  font-weight: var(--font-weight);
  margin-top: 15px;
}
.text .text-2 {
  text-transform: var(--upper-case);
  font-weight: var(--font-weight);
  font-size: 20px;
}
.text .text-2 .covido {
  color: #ff5363;
}
.text .text-2 .covido-2{
  color: var(--light-gray);
}
.text {
  padding: 20px;
}
.info-of-covid{
  font-size: var( --default-font-size);
}
.about-covid{
  padding: 10px;
}
div p {
  margin-top: 15px;
  font-size: 20px;
}
.howtoprotect{
  border-radius: 100px 100px;
}
.buttons{
  padding: 30px;
}
.buttons a{
  text-decoration: none;
}
.numbers div{
  padding: 20px;
}
.numbers div h2{
  font-size:10px;
  color: var( --light-gray);
  font-weight: var(--font-weight);
}
.numbers div p{
   font-weight: var(--font-weight);
}
.last-update{
  padding: 20px;
  font-size: 10px;
  color: var( --light-gray);
}
.photo{
  margin: 30px auto;
}
</style>
<script>
export default {
  name: "coronavirus",
};
</script>
