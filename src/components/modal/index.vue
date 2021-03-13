<template>
<div class="modal fade"  ref="modalreference" data-backdrop="static">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <slot name="modal-title"><h5 class="modal-title">{{modalTitle}}</h5></slot>
            <button type="button" class="close" @click="close()" >
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <slot name="modal-body"></slot>
        </div>
        <div class="modal-footer" v-if="!hideFooter" :class="classFooter">
            <slot name="modal-footer" :cancel="close()"></slot>
        </div>
        </div>
    </div>
</div>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
    props:{
        value:{type:String},
        modalTitle:{type:String},
        classFooter:{type:String},
        hideFooter:{type:Boolean,default:false}
    },
    setup(props){
        const modalreference = ref(null)
        // onMounted(()=>{
        //     console.log(modalreference.value)
        //     $(modalreference.value).modal('show')
        // })
        function show(){
            $(modalreference.value).modal('show')
        }
        function close(){
            $(modalreference.value).modal('hide')
        }
        function toggle(){
            $(modalreference.value).modal('toggle')
        }
        return{
            modalreference,
            close,
            show,
            toggle
        }
    }
}
</script>

<style>

</style>