<template>
    <section>
        <b-container>
        <div class="info text-center row">
            <p class="p1">HOW TO PROTECT YOURSELF?</p>
            <h2>PREVENTION & ADVICE</h2>
            <p class="col-lg-12 col-md-12 col-sm-12">There is currently no vaccine to prevent coronavirus disease 2019 (COVID-19). <span>The best way to prevent illness is to avoid being exposed to this virus.</span> Stay aware of the latest information on the COVID-19 outbreak, available on the WHO website and through your national and local public health authority.</p>
        </div>
        <div class="steps d-flex justify-content-around row">
            <div class="col-lg-3 col-md-6 col-sm-12 row">   
                <img src="../../assets/images/advice-a.png" alt="" class="col-lg-12 col-md-12 col-sm-12">
                <h3>Wash your hands frequently</h3>
                <p>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water for at least 20 seconds.</p>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 row">
                <img src="../../assets/images/advice-b.png" alt="" class="col-lg-12 col-md-12 col-sm-12">
                <h3>Maintain social distancing</h3>
                <p>Maintain at least 1 metre (3 feet) distance between yourself & anyone who is coughing or sneezing. If you are too close, get chance to infected.</p>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 row">
                <img src="../../assets/images/advice-c.png" alt="" class="col-lg-12 col-md-12 col-sm-12">
                <h3>Avoid touching face</h3>
                <p>Hands touch many surfaces and can pick up viruses. So, hands can transfer the virus to your eyes, nose or mouth and can make you sick.</p>
            </div>
             <div class="col-lg-3 col-md-6 col-sm-12 row">
                <img src="../../assets/images/advice-d.png" alt="" class="col-lg-12 col-md-12 col-sm-12">
                <h3>Practice respiratory hygiene</h3>
                <p>Maintain good respiratory hygiene as covering your mouth & nose with your bent elbow or tissue when cough or sneeze.</p>
            </div>
        </div>
        <div class="ask d-flex justify-content-around row text-center">
                  <div class="btn col-lg-4 col-md-12 col-sm-12">
                    <a href="#hand-wash"> Check How You Wash Hand  <font-awesome-icon icon="arrow-right"/></a>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12">
                      <a href="#">Q&A On CoronaVirus  <font-awesome-icon icon="arrow-right"/></a>
                  </div>
        </div>
        </b-container>
    </section>
    
</template>
<script>
export default {
    name:"prevention1"
}
</script>
<style scoped>
.info{
    padding: 50px;
    text-align: center;
}
.info .p1{
    color: var(--sec-color);
    font-weight: var(--font-weight);
}
.info h2{
    color: var(--light-gray);
    font-weight: var(--font-weight);
}
.info span{
    font-weight: var(--font-weight);
}
.steps{
    text-align: center;
}
.steps div{
    padding: 30px;
}
.steps div h3{
    font-size: 16px;
    font-weight: var(--font-weight);
}
.steps img{
    border-radius: 100px 100px;
    padding-bottom: 20px;
}
.ask{
    padding: 30px;
}
.ask a{
    text-decoration: none;
    padding-right:20px ;
}
.btn{
    font-weight: var(--font-weight);
    border-radius: 100px 100px;
    border: 2px solid var(--sec-color);
    background-color: var(--sec-color);
    
}
.btn a{
    color: var(--white);
    
}
</style>