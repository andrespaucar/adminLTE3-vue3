<template>
    <aside class="main-sidebar elevation-4 " :class="'sidebar-'+variant">
        <!-- Brand Logo -->
        <a href="/" class="brand-link logo-switch" :class="'navbar-'+variantBrand">
            <!-- <img src="assets/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
                style="opacity: .8">
            <span class="brand-text font-weight-light">AdminLTE 3</span> -->
            <slot name="brand"></slot>
            <img src="assets/dist/img/logo-xs.png" alt="AdminLTE Docs Logo Small" class="brand-image-xl logo-xs">
            <img src="assets/dist/img/logo-xl.png" alt="AdminLTE Docs Logo Large" class="brand-image-xs logo-xl" style="left: 12px">
        </a>
        <!-- Sidebar -->
        <div class="sidebar">
            <!-- Sidebar user panel (optional) -->
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <slot name="user-panel"></slot>
            </div>
            <!-- Sidebar Menu -->
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
                    <slot name="sidebar-menu"></slot>
                    <!-- <li class="nav-item menu-open">
                        <a href="#" class="nav-link active">
                            <i class="nav-icon fas fa-tachometer-alt"></i>
                            <p>
                            Starter Pages
                            <i class="right fas fa-angle-left"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                        <li class="nav-item">
                        <a href="#" class="nav-link active">
                            <i class="far fa-circle nav-icon"></i>
                            <p>Active Page</p>
                        </a>
                        </li>
                        <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>Inactive Page</p>
                        </a>
                        </li>
                        </ul>
                    </li> -->
                </ul>
            </nav>
        </div>
        
    </aside>
</template>

<script>

export default {
    props:{
        variant:{type:String,default:'primary'},
        variantBrand:{type:String,default:'dark'},
    }
}
</script>

<style>

</style>