<template>
<div class="content-wrapper">
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <slot name="title"> 
               <h1 class="m-0 text-dark">{{title}}</h1>  
            </slot>
          </div> 
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
            <slot name="breadcrumb">
                <!-- 
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">Dashboard v3</li>
                 -->
            </slot>
            </ol>
          </div> 
        </div> 
      </div>
    </div>
    <div class="content">
      <div class="container-fluid">
        <slot name="content"></slot>
      </div>
    </div>
</div>
</template>

<script>
export default {
    props:{
        title:{type:String}
    }
}
</script>

<style>

</style>