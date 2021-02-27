<template>
    <li class="nav-item">
        <router-link :to="to" class="nav-link" exact-active-class="active">
            <i class="nav-icon" :class="['fa-'+icon,type]"></i>
            <p> {{label}} </p>
        </router-link>
    </li>
</template>

<script>
export default {
    props:{
        label:{type:String,required:true},
        icon:{type:String,default:'circle'},
        to:{type:[String,Object],required:true},
        type:{type:String,default:'fas'}
    }
}
</script>

<style>

</style>