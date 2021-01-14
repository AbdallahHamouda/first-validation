<template>
<div id="app">
    <div id="container">
        {{checking}}
        <h4 style="color:red">{{$store.state.errlist}}</h4>
        <h3>Price <span>{{$store.state.price}}</span></h3>
        <label for="" >Name on card</label>
        <input type="text" id="inpuz" v-model="$store.state.uName">
        <label for="">phone number</label>
        <input type="text" id="inpuz" v-model="$store.state.pnum">
        <label for="" style="margin-right:81%">expire date</label>
        <input type="date" id="inpuz" v-model="$store.state.edate">
        <label for="" style="margin-right:77%">credit number</label>
        <input type="text" id="inpuz" v-model="$store.state.cnum">
        <label for="" style="margin-right:93%">cvc</label>
        <input type="text" id="inpuz" v-model="$store.state.cvc">
        <a href="/Result" class="Sub" :class="{sib: !$store.state.btn}">Submit</a>
    </div>
</div>
</template>
<script>
import store from '@/store/index'
export default {
   methods:{
   },
   computed:{
    checking(){
        return store.commit('cheking')
    }
  }
   
   }
</script>
<style scoped>
*{
    margin: 0%;
    padding: 0%;
}
#container{
display: flex;
flex-flow: column wrap;
margin-left:30%;
margin-right:30%;
}
label{
    margin-right: 75%;
}
#container input{
    height: 35px;
    font-size: 27px;
    font-weight: 500;
}
.Sub{
    padding: 15px;
    background-color: #42b983;
    color: white;
    font-size: 20px;
    text-align: center;
    overflow:hidden;
    text-decoration: none;
    border-radius: 10px;
    margin: 2% 35% 35%;
}
.Sub:hover{
     background-color: #34ac76;
     box-shadow: 5px 5px rgb(224, 223, 223);
}
.sib{
     background-color: #797878;
     cursor:auto;

}
.sib:hover{
     background-color: #797878;

}
</style>
