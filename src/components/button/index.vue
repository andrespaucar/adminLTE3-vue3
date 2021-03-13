<template>
  <button :type="type" class="btn" :class="addclass">
    <slot></slot>
  </button>
</template>

<script>
import { ref } from "vue";
export default {
  props:{
    variant:{default:'default',type:String},
    size:{type:String,required:false},
    type:{default:'button',type:String}
  },
  setup(props){
    const addclass = ref("")
    
    addclass.value = "btn-"+ props.variant
    
    if(props.size != undefined){
      addclass.value += " btn-"+props.size
    }

    return{
      addclass
    }
  }
}
</script>

<style>

</style>