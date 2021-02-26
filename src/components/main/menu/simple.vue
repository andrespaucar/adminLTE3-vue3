<template>
    <li class="nav-item">
        <router-link :to="to" class="nav-link" exact-active-class="active">
            <i class="nav-icon fas " :class="'fa-'+icon"></i>
            <p> {{label}} </p>
        </router-link>
    </li>
</template>

<script>
export default {
    props:{
        label:{type:String,required:true},
        icon:{type:String,required:true},
        to:{type:[String,Object],required:true}
    }
}
</script>

<style>

</style>