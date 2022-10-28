<template>
        <div>
            <pre1/>
            <pre2/>
        </div>
</template>
<script>
import pre1 from'@/components/preventions/Prevention1.vue'
import pre2 from'@/components/preventions/Prevention2.vue'
export default {
    name:"pres",
    components:{
        pre1,
        pre2
    }
}
</script>
<style scoped>
    div{
        background-color: #f7f9fe;
    }
</style>