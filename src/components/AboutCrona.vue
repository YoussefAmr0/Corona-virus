<template>
<div class="main">
  <b-container>
    <section class="about-disease">
    <div class="d-flex justify-content-between mt-5 row">
      <div class="text col-lg-6 text-center col-md-12 col-sm-12 row">
          <p class="about col-lg-12 col-md-12 col-sm-12">ABOUT THE DISEASE</p>
          <h2>CORONAVIRUS (COVID-19)</h2>
          <p><span>COVID-19 is a new illness that can affect your lungs and airways.</span>It's caused by a virus called coronavirus. It was discovered in December 2019 in Wuhan, Hubei, China.</p> <p>signs of infection include respiratory symptoms, fever, cough, shortness of breath and breathing difficulties. In more severe cases, infection can cause pneumonia, severe acute respiratory syndrome, kidney failure and even death </p> <p>Standard recommendations to prevent infection spread include regular hand washing, covering mouth and nose when coughing and sneezing, thoroughly cooking meat and eggs. Avoid close contact with anyone showing symptoms of respiratory illness such as coughing and sneezing.</p>
      </div>
      <div class="table text-center">
        <b-list-group>
          <b-list-group-item button class="title-top">What you need to know</b-list-group-item>
          <b-list-group-item button class="titles">How Coronavirus Is Spread</b-list-group-item>
          <b-list-group-item button class="titles">Symptoms of coronavirus</b-list-group-item>
          <b-list-group-item button class="titles">How to protect yourself</b-list-group-item>
          <b-list-group-item button class="titles">Treatment for coronavirus</b-list-group-item>
          <b-list-group-item button class="titles">Myth-Busters of coronavirus</b-list-group-item>
          <b-list-group-item button class="titles" >Questions & answers</b-list-group-item>
        </b-list-group>
      </div>
    </div>
    </section>
    <section class="how">
      <div class="text-center">
        <p class="about" id="howspread">HOW CORONAVIRUS IS SPREAD</p>
        <h3>TRANSMISSION OF COVID-19</h3>
        <p class="reasone">Because it's a new illness, we do not know exactly how coronavirus spreads from person<br> to person. Similar viruses are spread in cough droplets.</p>
        <div class="ways d-flex justify-content-around row">
          <div class="col-lg-3 col-md-4 col-sm-12 row">
            <img src="../assets/images/spread-a.png" alt="" class="col-lg-12 col-md-12 col-sm-12">
            <h4>Person-to-person spread as close contact with infected</h4>
            <p>The coronavirus is thought to spread mainly from person to person. This can happen between people who are in close contact with one another.</p>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12 row">
            <img src="../assets/images/spread-b.png" alt="" class="col-lg-12 col-md-12 col-sm-12">
            <h4>Touching or contact with infected surfaces or objects</h4>
            <p>A person can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or possibly their eyes.</p>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12 row">
            <img src="../assets/images/spread-c.png" alt="" class="col-lg-12 col-md-12 col-sm-12">
            <h4>Droplets that from infected person coughs or sneezes</h4>
            <p>The coronavirus is thought to spread mainly from person to person. This can happen between people who are in close contact with one another.</p>
          </div>
        </div>
        <div class="d-grid  mx-auto col-lg-3 col-md-6 col-sm-12">
  <button class="btn btn-primary" type="button"><font-awesome-icon icon="question-circle"/> Have question about
                        spreading?</button>
  
</div>
      </div>
    </section>
  </b-container>
  </div>
</template>
<script>
export default {
  name: "aboutcorona",
};
</script>
<style scoped>
.about-disease{
  padding-top: 100px;
  padding-bottom: 100px;
}
.text .about{
  color: var(--sec-color);
  font-weight: var(--font-weight);
}
.text h2{
  color: var(--main-color);
  font-weight: var(--font-weight);
  text-transform: var( --upper-case);
}
.text span{
  font-weight: var(--font-weight);
}
.text p{
  font-size:15px;
}
.table{
  width: 50vh;
}
.table .title-top{
    color: var(--light-gray);
    font-weight: var(--font-weight);
     
}
.table .titles{
  color: var(--sec-color);  
}
.how{
  background-color: #f8f7f7;
  text-align: center;
  margin-top:20px;
  padding: 40px 0;
}
.how .about{
  color: var(--sec-color);
  font-weight: var(--font-weight);
}
.how h3{
  color: var(--light-gray);
  font-weight: var(--font-weight);
}
.ways{
  text-align: left;
  padding-bottom: 10px;
}
.ways img{
  padding-bottom: 3px;
  border-bottom: solid 3px var(--sec-color);
}
.ways div{
  background-color: white;
  margin: 10px;
  padding: 10px;
}
.ways h4{
  padding: 10px;
  color: var(--sec-color);
  font-size: var(--default-font-size);
  
}
.btn{
  border-radius: 100px 100px;
}
</style>