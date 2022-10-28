<template>
    <section>
        <b-container>
        <div class="take-steps d-flex justify-content-around row">
            <div class="texts col-lg-6 col-md-12 col-sm-12">
                <h4>Take steps to protect others</h4>
                <p><font-awesome-icon class="icon" icon="check-circle"/><span>Stay home if you’re sick</span> – Stay home if you are sick, except to get medical care.</p>
                <p><font-awesome-icon class="icon" icon="check-circle"/><span>Cover your mouth and nose</span> – with a tissue when you cough or sneeze (throw used <br>tissues in the trash) or use the inside of your elbow.</p>
                <p><font-awesome-icon class="icon" icon="check-circle"/><span>Wear a facemask if you are sick</span> – You should wear a facemask when you are<br> around other people (e.g., sharing a room or vehicle) and before you enter a<br> healthcare provider’s</p>
                <p><font-awesome-icon class="icon" icon="check-circle"/><span>Clean AND disinfect frequently touched surfaces daily</span>– This includes phones<br>tables, light switches, doorknobs, countertops, handles, desks, toilets, faucets,<br> and sinks.</p>
                <p><font-awesome-icon class="icon" icon="check-circle"/><span>Clean the dirty surfaces </span>– Use detergent or soap and water prior to disinfection.</p>
                <p><font-awesome-icon class="icon" icon="check-circle"/><span>Stay informed about the local COVID-19 situation </span>– Get up-to-date information<br> about local COVID-19 activity from <a href="">public health officials.</a></p>
                <p><font-awesome-icon class="icon" icon="check-circle"/><span>Dedicated, lined trash can </span>– If possible, dedicate a lined trash can for the ill person.<br>Use gloves when removing garbage bags, and handling & disposing of trash.</p>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 row">
                <img src="../../assets/images/steps.png" class="col-lg-12 col-md-12 col-sm-12">
            </div>
        </div>
        <div class="steps">
            <h6>Follow steps to wash hands</h6>
            <a href="">Why do I need wash hand <font-awesome-icon icon="arrow-right"/></a>
            <div id="hand-wash" class="hand-wash d-flex justify-content-around row">
                <div class="col-lg-2 col-md-6 col-sm-4 row">
                    <img src="../../assets/images/hand-a.png" class="col-lg-12 col-md-6 col-sm-12">
                    <h5>Soap on Hand</h5>
                </div>
                 <div class="col-lg-2 col-md-6 col-sm-4 row">
                    <img src="../../assets/images/hand-b.png" class="col-lg-12 col-md-6 col-sm-12">
                    <h5>Palm to Palm</h5>
                </div>
                 <div class="col-lg-2 col-md-6 col-sm-4 row">
                    <img src="../../assets/images/hand-c.png" class="col-lg-12 col-md-6 col-sm-12">
                    <h5>Between Fingers</h5>
                </div>
                 <div class="col-lg-2 col-md-6 col-sm-4 row">
                    <img src="../../assets/images/hand-d.png" class="col-lg-12 col-md-6 col-sm-12">
                    <h5>Back to Hands</h5>
                </div>
                 <div class="col-lg-2 col-md-6 col-sm-4 row">
                    <img src="../../assets/images/hand-e.png" class="col-lg-12 col-md-6 col-sm-12">
                    <h5>Clean with Water</h5>
                </div>
                 <div class="col-lg-2 col-md-6 col-sm-4 row">
                    <img src="../../assets/images/hand-f.png" class="col-lg-12 col-md-6 col-sm-12">
                    <h5>Focus on Wrist</h5>
                </div>
            </div>
        </div>
        </b-container>
    </section>
</template>
<script>
export default {
    name:"prevetion2"
}
</script>
<style scoped>
.take-steps{
    background-color: white;
}
.take-steps h4{
    color: var(--light-gray);
    font-weight: var(--font-weight);
    font-size: 30px;
    padding: 30px 0;
}
.take-steps p{
    font-size:15px;
}
.take-steps p span{
     font-weight: var(--font-weight);
}
.take-steps .icon{
    margin-right: 5px;
    color:#3dca93;
}
.steps{
    text-align: center;
    padding: 50px;
}
.steps h6{
    font-weight: var(--font-weight);
    color: var(--light-gray);
    font-size: 30px;
}
.steps a{
    text-decoration: none;
    font-weight: var(--font-weight);
}
.hand-wash{
    padding-top: 60px;
}
.hand-wash  h5{
    padding-top: 10px;
    font-weight: var(--font-weight);
    font-size: 15px;
}
.hand-wash img{
    border-radius: 100px 100px;
}
</style>