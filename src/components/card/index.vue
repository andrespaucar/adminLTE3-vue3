<template>
  <div class="card">
      <div class="card-header" :class="headerClass">
          <slot name="header"></slot>
      </div>
      <div class="card-body" :class="bodyClass">
          <slot name="body"></slot>
      </div>
      <div class="card-footer"  :class="footerClass">
          <slot name="footer"></slot>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        hideFooter:{default:false},
        bodyClass:{type:String},
        headerClass:{type:String},
        footerClass:{type:String},
    },
    setup(){

    }
}
</script>

<style>

</style>