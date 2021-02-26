<template>
    <nav class="main-header navbar navbar-expand " :class="classAdd">
        <!-- Left navbar links -->
        <ul class="navbar-nav">
             <li class="nav-item">
                <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
            </li>
            <slot name="navbar-left"></slot>
            <!--<li class="nav-item d-none d-sm-inline-block">
                <a href="index3.html" class="nav-link">Home</a>
            </li> 
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Help
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                    <a class="dropdown-item" href="#">FAQ</a>
                    <a class="dropdown-item" href="#">Support</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Contact</a>
                </div>
            </li> -->
        </ul>
        <!-- Right navbar links -->
        <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
                <slot name="navbar-right"></slot>
                <!-- <a class="nav-link" data-toggle="dropdown" href="#">
                    <i class="far fa-bell"></i>
                    <span class="badge badge-warning navbar-badge">15</span>
                </a>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <span class="dropdown-header">15 Notifications</span>
                    <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-item">
                    <i class="fas fa-envelope mr-2"></i> 4 new messages
                    <span class="float-right text-muted text-sm">3 mins</span>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-item">
                    <i class="fas fa-users mr-2"></i> 8 friend requests
                    <span class="float-right text-muted text-sm">12 hours</span>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-item">
                    <i class="fas fa-file mr-2"></i> 3 new reports
                    <span class="float-right text-muted text-sm">2 days</span>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
                </div> -->
            </li>
        </ul>
    </nav>
</template>

<script>
import { ref } from 'vue'
export default {
    props:{
        variant:{type:String,default:'white'}
    },
    setup(props){
        const classAdd = ref('')
        if(props.variant === 'white' || props.variant === 'orange' || props.variant === 'warning'){
            classAdd.value = 'navbar-light navbar-'+props.variant
        }else{
            classAdd.value = 'navbar-dark navbar-'+props.variant
        }
        // const colors = [{color:'primary'}]
        return{
            classAdd
        }
    }
}
</script>

<style>

</style>