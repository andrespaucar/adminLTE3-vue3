<template>
<div class="overlay-wrapper position-relative table-responsive" :class="{'overflow-hidden':loading}">
    <div v-if="loading" class="overlay ">
        <i class="fas fa-3x fa-sync-alt fa-spin"></i><div class="text-bold pt-2">Loading...</div>
    </div>
    <table class="table">
        <thead>
        <tr>
            <th v-for="(header,index) in headers" :key="index">{{header.label ?? header}}</th>
        </tr>
        </thead>
        <tbody>
        <!-- <td v-for="(header,index) in headers" :key="index"> -->
            <slot ></slot>
            <!-- <slot :name="cell(header)" :header="header" :index="index"> </slot> -->
        <!-- </td> -->
        </tbody>
    </table>
</div>
</template>

<script>
export default {
    props:{
        headers:{type:[Array,Object],required:true},
        loading:{type:Boolean,default:false},
    },
    setup(props){
        function cell(str){
            console.log(str)
            return str;
        }
        return {
            cell
        }
    }
}
</script>

<style>

</style>