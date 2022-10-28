<template>
  <div class="main">
    <b-container>
        <div class="text">
            <h1>DO’S & DON’TS</h1>
            <h2>PROTECT YOURSELF</h2>
            <p>The best thing you can do now is plan for how you can adapt your daily routine. Take few steps to protect yourself as Clean your hands often, Avoid close contact, Cover coughs and sneezes, clean daily used surfaces etc. The best way to prevent illness is to avoid being exposed to this virus.</p>
        </div>
        <div class="steps d-flex justify-content-around row">
            <div class="left-steps col-lg-4 col-md-6 col-sm-6">
                <div class="d-flex position-relative">
                    <h3>Avoid Close Contact</h3>
                    <font-awesome-icon class="icon position-absolute end-40" icon="times-circle"/><img src="../assets/images/donts-a.png" alt="">
                </div>
                <div class="d-flex position-relative">
                    <h3>Avoid Close Contact</h3>
                    <font-awesome-icon class="icon position-absolute end-40" icon="times-circle"/><img src="../assets/images/donts-b.png" alt="">
                </div>
                <div class="d-flex position-relative">
                    <h3>Social Distancing</h3>
                    <font-awesome-icon class="icon position-absolute end-40" icon="times-circle"/><img src="../assets/images/donts-c.png" alt="">
                </div>
            </div>
            <div class="mid-steps col-lg-4 col-md-12 col-sm-12 row ">
                <img src="../assets/images/protect.png" alt="" class="col-lg-12 col-md-12 col-sm-12">
            </div>
            <div class="right-steps col-lg-4 col-md-6 col-sm-6">
                <div class="d-flex position-relative">
                    <img src="../assets/images/dos-a.png" alt=""><font-awesome-icon class="icon position-absolute end-40" icon="check-circle"/>
                    <h3>Wash Your Hands</h3>
                </div>
                <div class="d-flex position-relative">
                    <img src="../assets/images/dos-b.png" alt=""><font-awesome-icon class="icon icon position-absolute end-40" icon="check-circle"/>
                    <h3>Drink Much Watar</h3>
                </div>
                <div class="d-flex position-relative">
                    <img src="../assets/images/dos-c.png" alt=""><font-awesome-icon class="icon icon position-absolute end-40" icon="check-circle"/>
                    <h3>Use Face Mask</h3>
                </div>
            </div>
            
            
        </div>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "do&dont",
};
</script>
<style scoped>
.main{
    background-color: var(--dark-white);
    text-align: center;
}
.text{
    padding: 30px 0;
}
.text h1{
    color: var(--sec-color);
    font-size: 20px;
    font-weight: var(--font-weight);
    padding-top: 30px;
}
.text h2{
    color: var(--main-color);
    font-weight: var(--font-weight);
    padding: 20px 0;
}
.text p{
    font-size: 15px;
}
.steps{
    padding-top: 30px;
}
.steps .left-steps div{
    padding: 10px;
    justify-content: right;
}
.steps .right-steps .icon{
    color: #3dca93;
}
.steps .left-steps .icon{
    color: #ff0000;
}
.steps .right-steps div{
    padding: 10px;

}
.steps h3{
    font-size: 15px;
    font-weight: var(--font-weight);
    color: var(--sec-color);
    padding: 30px 10px 0 10px;
}
.left-steps img,
.right-steps img{
    border-radius: 100px 100px;
    border:2px solid var(--sec-color);
    width: 80px;
    height: 80px;
    background-color: var(--white);
}
</style>