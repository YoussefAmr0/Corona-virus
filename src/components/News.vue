<template>
        <div class="main">
    <b-container>
        <div class="texts">
            <a href="#">RECENT FROM BLOG</a>
            <h1>LATEST UPDATE</h1>
        </div>
        <div class="updates d-flex justify-content-around  row">
            <div class="col-lg-3 col-md-5 col-sm-12 row">
                <img src="../assets/images/blog-a.jpg" alt="" class="col-lg-12 col-md-12 col-sm-12">
                <h2>Caring for someone at home</h2>
                <p>Most people who get sick with COVID-19 will have only mild illness and should recover at home. Care at home can help stop the spread of COVID-19</p>
            </div>
            <div class="col-lg-3 col-md-5 col-sm-12 row">
                <img src="../assets/images/blog-b.jpg" alt="" class="col-lg-12 col-md-12 col-sm-12">
                <h2>15 ways to keep safe and healthy</h2>
                <p>Most people who get sick with COVID-19 will have only mild illness and should recover at home. Care at home can help stop the spread of COVID-19</p>
            </div>
            <div class="col-lg-3 col-md-5 col-sm-12 row">
                <img src="../assets/images/blog-c.jpg" alt="" class="col-lg-12 col-md-12 col-sm-12">
                <h2>If You Think You Are Sick</h2>
                <p>If you are sick with COVID-19 or think you might have it, follow the steps below to help protect other people in your home and community</p>
            </div>
        </div>
    </b-container>
    </div>
</template>
<script>
export default {
    name:"news"
}
</script>
<style scoped>
.main{
    background-color: var(--dark-white);
}
.texts{
    text-align: center;
    padding: 30px;
}
.texts a{
    text-decoration: none;
    color: var(--sec-color);
    font-weight: var(--font-weight);
    font-size: 20px;
}
.updates div{
    text-align: center;
    background-color: var(--white);
    margin: 15px;
    padding: 20px;
}
.updates div h2{
    font-size: 18px;
    padding-top: 10px;
    font-weight: var(--font-weight);
}
.texts h1{
    color: var(--main-color);
    font-weight: var(--font-weight);
    font-size: 30px;
    margin-top:20px ;
}
</style>