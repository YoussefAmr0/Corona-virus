<template>
        <div>
            <b-container>
                <div class="texts">
                    <h1>FREQUENTLY ASKED QUESTIONS</h1>
                    <h2>COMMON QUESTION & ANSWER</h2>
                </div>
                <div>
                    <div class="list-group">
                            <a href="#" class="list-group-item list-group-item-action ">The current link item</a>
                            <a href="#" class="list-group-item list-group-item-action">A second link item</a>
                            <a href="#" class="list-group-item list-group-item-action">A third link item</a>
                            <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
                            <a class="list-group-item list-group-item-action disabled">A disabled link item</a>
                    </div>
                    <div></div>
                </div>
            </b-container>
        </div>
</template>
<script>
export default {
    name:"faq"
}
</script>
<style scoped>
.texts {
    padding: 40px 0;
    text-align: center;
}
.texts h1{
    color: var(--sec-color);
    font-weight: var(--font-weight);
    font-size: 20px;
    padding-bottom: 20px;
}
.texts h2{
    color: var(--main-color);
    font-weight: var(--font-weight);
}
</style>