<template>
<b-container>
  <section class="main">
    <div class="title">
      <p class="p1" id="sympo">WHAT ARE THE SYMPTOMS OF COVID-19?</p>
      <h1>SYMPTOMS OF CORONAVIRUS</h1>
      <p>
        The most common symptoms of COVID-19 are fever, tiredness, and dry
        cough. Some patients may have 
        aches and pains, nasal congestion, runny nose, sore throat or diarrhea.
        These symptoms are usually mild 
        and begin gradually. Also the symptoms may appear 2-14 days after
        exposure.
      </p>
    </div>
    <div class="symph d-flex justify-content-evenly row">
        <div class="position-relative col-lg-4 col-md-6 col-sm-12">
            <img src="../assets/images/symptom-a.png" class="position-absolute top-0 end-0">
            <h2>Fever</h2>
            <p><span>High Feveran</span>– this means you feel hot to touch on your chest or back (you do not need to measure your temperature). It is a common sign and also may appear in 2-10 days if you affected.</p>
        </div>
         <div class="position-relative col-lg-4 col-md-6 col-sm-12">
            <img src="../assets/images/symptom-b.png" class="position-absolute top-0 end-0">
            <h2>Cough</h2>
           <p><span>Continuous cough</span>– this means coughing a lot for more than an hour, or 3 or more coughing episodes in 24 hours (if you usually have a cough, it may be worse than usual).</p>
        </div>
         <div class="position-relative col-lg-4 col-md-6 col-sm-12">
            <img src="../assets/images/symptom-c.png" class="position-absolute top-0 end-0">
            <h2>Shortness of breath</h2>
            <p><span>breathing</span>– Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing or shortness of breath.</p>
        </div>
    </div>
    <div class="questions d-flex justify-content-around row">
        <div class="text-center col-lg-6 col-md-12 col-sm-12">
            <font-awesome-icon class="icon position-absolute end-40 col-lg-4 col-md-6 col-sm-12" icon="exclamation-triangle"/> <span>Stay at home and call your doctor:</span> If you think you have been exposed to COVID-19 and develop a fever and any symptoms, such as cough or difficulty breathing, call your healthcare provider as soon as possible for medical advice.
            
        </div>
      
                  <div class="btnq text-center col-lg-4 col-md-6 col-sm-12">
                  <button class="btn btn-primary" type="button"><font-awesome-icon class="icon" icon="question-circle"/> Have Question? Find Answer</button>
                  </div>
          
    </div>
  </section>
  </b-container>
</template>
<script>
export default {
  name: "SYMPTOMS OF CORONAVIRUS",
};
</script>
<style scoped>
.main{
  padding: 20px;
}
.title {
  text-align: center;
  margin: 40px 0;
}
.title .p1 {
  color: var(--sec-color);
  font-weight: var(--font-weight);
}
.title h1 {
  color: var(--light-gray);
  font-weight: var(--font-weight);
  font-size: 35px;
}
.symph div {
  margin-top:60px;
  margin-bottom:60px;
  width: 40vh;
}
.symph h2 {
  font-size: 18px;
  color: var(--sec-color);
  font-weight: var(--font-weight);
  padding: 20px;
}
.symph span {
  font-weight: var(--font-weight);
}
.symph img {
  border-radius: 100px 100px;
  width: 25%;
  height: 30%;
}
.questions{
    margin-top: 50px;
}
.questions span{
    color: var(--sec-color);
    font-weight: var(--font-weight);
    padding-left: 20px;
}
.icon{
  color: var(--sec-color);
}
.btnq{
  margin: 30px;
}
</style>

