<template>
  <MainHeaderComponent variant="success">
    <template #navbar-left>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="index3.html" class="nav-link">Home</a>
      </li>
    </template>
  </MainHeaderComponent>

  <MainSidebarComponent variant="light-success" variant-brand='dark'>
    <template #brand>

    </template>
    <template #user-panel>
      <div class="image d-flex align-items-center">
        <img src="assets/dist/img/user2-160x160.jpg" class="img-circle elevation-1" alt="User Image">
      </div>
      <div class="info">
        <a href="#" class="d-block">Andres Paucar</a>
        <small class="text-success">Administrador</small>
      </div>
    </template>
    <template #sidebar-menu>
      <menu-simple label="Usuarios" icon="users" to="/users"/>
      <menu-simple label="Home" icon="home" to="/"/>
    </template>
  </MainSidebarComponent>
</template>

<script>
import MainHeaderComponent from "@/components/main/MainHeader.vue";
import MainSidebarComponent from '@/components/main/MainSidebar.vue';
import MenuSimple from "@/components/main/menu/simple.vue";
import { onMounted } from 'vue';
export default {
  components:{
    MainHeaderComponent,
    MainSidebarComponent,
    MenuSimple
  },
  setup(){
    onMounted(()=>{
      // document.body.classList.add("hold-transition","sidebar-mini");
    })
  }
}
</script>

<style>

</style>