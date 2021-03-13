<template>
    <ul class="pagination m-0 float-right">
        <li class="page-item">
            <a class="page-link" href="#" @click.prevent="firstPage">«</a>
        </li>
        <li class="page-item" v-for="(totalPage,index) in totalPages" :key="index">
            <a class="page-link" href="#" @click.prevent="changePage">{{totalPage}}</a>
        </li> 
        <li class="page-item">
            <a class="page-link" href="#" @click.prevent="lastPage">»</a>
        </li>
    </ul>
</template>

<script>
export default {
    props:{
        totalPages:{type:Number}
    },
    setup(props,{emit}){
        const changePage = ()=>{

        }
        const lastPage = () =>{

        }
        const firstPage = () =>{

        }
        return{
            changePage,
            lastPage,
            firstPage
        }
    }
}
</script>

<style>

</style>