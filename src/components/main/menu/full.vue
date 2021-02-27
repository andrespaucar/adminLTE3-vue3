<template>
    <li class="nav-item menu-open">
        <a href="#" class="nav-link">
            <i class="nav-icon fas " :class="'fa-'+icon"></i>
            <p>{{label}}
                <i class="right fas fa-angle-left"></i>
            </p>
        </a>
        <ul class="nav nav-treeview">
            <slot></slot>
            <!-- <li class="nav-item">
                <a href="#" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Inactive Page</p>
                </a>
            </li> -->
        </ul>
    </li>
</template>

<script>
export default {
    props:{
        label:{type:String,required:true},
        icon:{type:String,required:true}, 
    }
}
</script>

<style>

</style>