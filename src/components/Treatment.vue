<template>
    <div class="main position-relative">
        <b-container>
            <div class="d-flex row container">
                <div class="texts  col-lg-8 col-md-12 col-sm-12">
                    <h1>BE CAREFULL & STAY SAFE</h1>
                    <h2>TREATMENT FOR CORONAVIRUS</h2>
                    <p><span>To date, there is no vaccine and no specific antiviral medicine to prevent or treat COVID-2019.</span> However, those affected should receive care to relieve symptoms. People with serious illness should be hospitalized. Most patients recover thanks to supportive care.<br>Antibiotics do not help, as they do not work against viruses. Treatment aims to relieve the symptoms while your body fights the illness. You'll need to stay in isolation, away from other people, until you have recovered.</p>
                </div>
                <div class="care postion-absolute col-lg-4 col-md-12 col-sm-12">
                    <h3>Self Care</h3>
                    <p><font-awesome-icon icon="arrow-right"/> If you have mild symptoms, stay at home until you’ve recovered. You can relieve your symptoms if you:</p>
                    <p><font-awesome-icon icon="arrow-right"/> Rest and sleep</p>
                    <p><font-awesome-icon icon="arrow-right"/> Keep warm</p>
                    <p><font-awesome-icon icon="arrow-right"/> Drink plenty of liquids</p>
                    <p><font-awesome-icon icon="arrow-right"/> Use a room humidifier or take a hot shower to help ease a sore throat and cough</p>
                    <h4>Medical Treatments</h4>
                    <p>If you develop a fever, cough, and have difficulty breathing, promptly seek medical care. Call in advance and tell your health provider of any recent travel or recent contact with travelers.</p>
                </div>
            </div>
        </b-container>
    </div>
</template>
<script>
export default {
  name: "Treatment",
};
</script>
<style scoped>
.main{
    background-image: url("../assets/images/shape-a.png");
    background-color: var(--sec-color);
}
.texts{
    padding: 50px 0;
    color: var(--white);
}
.texts h1{
    font-size: 20px;
}
.texts h2{
    font-size: 30px;
    font-weight: var(--font-weight);
    padding: 15px 0;
}
.texts p{
    font-size: 15px;
}
.texts p span{
    font-weight: var(--font-weight);
}
.texts h1{
    color: #73e3ff;
}
.care{
    background-color: var(--light-blue);
    margin-top: 50px;
    color: var(--white);
    padding: 30px;
}
.care h3{
    font-size: 17px;
    font-weight: var(--font-weight);
}
.care p{
    font-size: 15px;
}
.care h4{
    font-size: 17px;
    font-weight: var(--font-weight);
}
</style>